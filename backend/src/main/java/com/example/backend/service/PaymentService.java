package com.example.backend.service;

import com.example.backend.dto.PaymentDTO;
import com.example.backend.dto.PaymentImageDTO;
import com.example.backend.model.PaymentImage;
import com.example.backend.payload.PaymentResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface PaymentService{
    List<PaymentDTO> setPaymentForAllRoom(Long feeId);
    PaymentDTO completePayment(Long roomId, Long feeId);
    PaymentResponse getAllPayment(int pageNo, int pageSize, String sortBy, String sortDir);
    List<PaymentDTO> getPaymentsOfRoom(Long roomId);
    void deletePaymentsByFeeId(Long feeId);
    PaymentImage createPaymentImage(Long paymentId, PaymentImageDTO paymentImageDTO);
}
