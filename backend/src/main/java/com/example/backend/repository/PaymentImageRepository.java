package com.example.backend.repository;

import com.example.backend.model.Payment;
import com.example.backend.model.PaymentImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentImageRepository extends JpaRepository<PaymentImage, Long> {
    List<PaymentImage> findByPaymentId(Long paymentId);
}
