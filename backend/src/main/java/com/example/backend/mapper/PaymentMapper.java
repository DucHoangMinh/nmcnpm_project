package com.example.backend.mapper;

import com.example.backend.dto.PaymentDTO;
import com.example.backend.model.Payment;

public class PaymentMapper {
    public static PaymentDTO toPaymentDTO(Payment newPayment) {
        PaymentDTO paymentDTO = PaymentDTO.builder()
                .id(newPayment.getId())
                .roomID(newPayment.getRoom().getId())
                .feeID(newPayment.getFee().getId())
                .status(newPayment.getStatus())
                .submittedDate(newPayment.getSubmittedDate())
                .totalMoney(newPayment.getTotalMoney())
                .build();
        return paymentDTO;
    }
}
