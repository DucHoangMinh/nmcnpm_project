package com.example.backend.service.ServiceImpl;

import com.example.backend.dto.FeeDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Fee;
import com.example.backend.model.Payment;
import com.example.backend.model.ResponseModel;
import com.example.backend.repository.FeeRepository;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.service.FeeService;
import com.example.backend.service.PaymentService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Data
public class FeeServiceImpl implements FeeService {
    private final FeeRepository feeRepository;
    private final PaymentRepository paymentRepository;
    private final ModelMapper modelMapper;
    private final PaymentService paymentService;
    @Override
    public List<FeeDTO> getAllFees() {
        List<Fee> fees =  feeRepository.findAll();
        return fees.stream().map(fee -> modelMapper.map(fee, FeeDTO.class)).toList();
    }
    @Override
    public FeeDTO getFeeById(Long id) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        FeeDTO feeDTO = modelMapper.map(fee, FeeDTO.class);
        return feeDTO;
    }

    @Override
    public FeeDTO createFee(FeeDTO feeDTO) {
        Fee fee = modelMapper.map(feeDTO, Fee.class);
        Fee newFee = feeRepository.save(fee);
        feeDTO.setId(newFee.getId());
        return feeDTO;
    }

    @Override
    public FeeDTO updateFee(Long id, FeeDTO newFeeDTO) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        fee.setName(newFeeDTO.getName());
        fee.setDescription(newFeeDTO.getDescription());
        fee.setPrice(newFeeDTO.getPrice());
        fee.setUpdatedAt(LocalDateTime.now());
        fee.setDueTime(newFeeDTO.getDueTime());
        fee.setMandatory(newFeeDTO.isMandatory());
        feeRepository.save(fee);
        newFeeDTO.setId(id);
        return newFeeDTO;
    }

    @Override
    public void deleteFee(Long id) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        paymentService.deletePaymentsByFeeId(id); // Delete payments of this fee before deleting fee
        feeRepository.delete(fee);
    }

    @Override
    public List<FeeDTO> getDoneFees() {
        List<Fee> fees = feeRepository.getDoneFees();
        List<FeeDTO> feeDTOS = fees.stream().map(fee -> modelMapper.map(fee, FeeDTO.class)).collect(Collectors.toList());
        return feeDTOS;
    }
}