package com.example.backend.service.ServiceImpl;

import com.example.backend.dto.PaymentDTO;
import com.example.backend.dto.PaymentImageDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.mapper.PaymentMapper;
import com.example.backend.model.Fee;
import com.example.backend.model.Payment;
import com.example.backend.model.PaymentImage;
import com.example.backend.model.Room;
import com.example.backend.payload.PaymentResponse;
import com.example.backend.repository.FeeRepository;
import com.example.backend.repository.PaymentImageRepository;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.repository.RoomRepository;
import com.example.backend.service.PaymentService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@Service
@Data
public class PaymentServiceImpl implements PaymentService {
    private final FeeRepository feeRepository;
    private final RoomRepository roomRepository;
    private final PaymentRepository paymentRepository;
    private final PaymentImageRepository paymentImageRepository;
    private final ModelMapper modelMapper;
    @Override
    //Tạo tình trạng thanh toán cho tất cả các căn hộ
    public List<PaymentDTO> setPaymentForAllRoom(Long feeId) {
        List<Room> roomList = roomRepository.findAll();
        List<PaymentDTO> paymentDTOS  = new ArrayList<>();
        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + feeId));
        for (int i = 0; i < roomList.size(); i++) {
            Room room = roomList.get(i);
            if (paymentRepository.findByRoomIdAndFeeId(room.getId(), feeId) != null) {
                throw new RuntimeException("Fee with id " + feeId + " has already been assigned for room " + room.getId());
            } else {
                Float totalMoney;
                if (room.getTypeRoom() == "vip") {
                    totalMoney = (float)(fee.getPrice() * room.getArea() * 1.5);
                } else {
                    totalMoney = (fee.getPrice() * room.getArea());
                }
                Payment payment = Payment.builder()
                        .fee(fee)
                        .room(room)
                        .completed(false)
                        .totalMoney(totalMoney)
                        .build();
                Payment newPayment = paymentRepository.save(payment);
                PaymentDTO newPaymentDTO = PaymentMapper.toPaymentDTO(newPayment);
                paymentDTOS.add(newPaymentDTO);
            }

        }
        return paymentDTOS;
    }

    @Override
    //Đánh dấu đã thanh toán
    public PaymentDTO completePayment(Long roomId, Long feeId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + roomId));
        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + feeId));
        Payment payment = paymentRepository.findByRoomIdAndFeeId(roomId, feeId);
        payment.setCompleted(true);
        payment.setSubmittedDate(LocalDate.now());
        Payment updatedPayment = paymentRepository.save(payment);
        PaymentDTO paymentDTO = PaymentMapper.toPaymentDTO(updatedPayment);
        return paymentDTO ;
    }

    @Override
    public PaymentResponse getAllPayment(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        // Create Pageable instance
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
        Page<Payment> payments = paymentRepository.findAll(pageable);

        // Get content for page object
        List<Payment> content = payments.getContent();
        //List<PaymentDTO> content = listOfPayments.stream().map(payment -> PaymentMapper.toPaymentDTO(payment)).toList();
        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setContent(content);
        paymentResponse.setPageNo(payments.getNumber());
        paymentResponse.setPageSize(payments.getSize());
        paymentResponse.setTotalElements(payments.getTotalElements());
        paymentResponse.setTotalPages(payments.getTotalPages());
        paymentResponse.setLast(payments.isLast());
        return paymentResponse;
    }

    @Override
    public List<Payment> getPaymentsOfRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find room with id: " + roomId));
        List<Payment> payments = paymentRepository.findByRoomId(roomId);
//        List<PaymentDTO> paymentDTOS = payments.stream().map(payment -> PaymentMapper.toPaymentDTO(payment)).toList();
        return payments;
    }

    @Override
    public void deletePaymentsByFeeId(Long feeId) {
        paymentRepository.findByFeeId(feeId)
                .stream()
                .map(Payment::getId)
                .forEach(paymentRepository::deleteById);
    }

    @Override
    public PaymentImage createPaymentImage(Long paymentId, PaymentImageDTO paymentImageDTO) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new DataNotFoundException("Cannot found payment with id: " + paymentId));
        PaymentImage newPaymentImage = PaymentImage.builder()
                .payment(payment)
                .imageUrl(paymentImageDTO.getImageUrl())
                .build(); 
        int size = paymentImageRepository.findByPaymentId(paymentId).size();
        if (size > 5) {
            throw new RuntimeException("Cannot upload more than 5 images");
        }
        return paymentImageRepository.save(newPaymentImage);
    }
}
