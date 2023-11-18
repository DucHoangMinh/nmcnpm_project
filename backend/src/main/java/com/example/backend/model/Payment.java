package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "Payment")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Payment {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "fee_id")
    private Fee fee;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @Column(name = "is_completed")
    private Boolean isCompleted; // check đã nộp


}
