package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "payments")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "fee_id")
    private Fee fee;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @Column(name = "status")
    private String status; // check đã nộp

    @Column(name = "submitted_date")
    private LocalDate submittedDate; // Ngày nộp

    @Column(name = "total_money")
    private Float totalMoney; // Tổng số tiền thanh toán = giá phí * diện tích * loại phòng
}