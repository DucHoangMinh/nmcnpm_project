package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Payment")
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

    @Column(name = "is_completed")
    private boolean completed; // check đã nộp

    @Column(name = "submitted_date")
    private LocalDate submittedDate; // Ngày nộp

    @Column(name = "total_money")
    private Float totalMoney; // Tổng số tiền thanh toán = giá phí * diện tích * loại phòng

}
