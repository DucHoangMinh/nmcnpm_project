package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentDTO {
    private Long id;
    @JsonProperty("fee_id")
    private Long feeID;
    @JsonProperty("room_id")
    private Long roomID;
    @JsonProperty( "is_completed")
    private boolean completed; // check đã nộp
    @JsonProperty("submitted_date")
    private LocalDate submittedDate;
    @JsonProperty("total_money")
    private Float totalMoney;
}
