package com.example.backend.model;

import com.example.backend.repository.PaymentRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "payment_images")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payment payment;

    @Column(name = "image_url", length = 300, nullable = false)
    private String imageUrl;
}
