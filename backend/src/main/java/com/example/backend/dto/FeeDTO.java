package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FeeDTO {
    private Long id;
    private String name;
    private Float price;
    private String description; // Mô tả về loại phí

    private boolean mandatory;
    @JsonProperty("due_time")
    private LocalDate dueTime;

}
