package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoomDTO {
    private Long id;
    private String address; // mã số phòng
    @JsonProperty("type_room")
    private String typeRoom;
    private Float area; // diện tích căn
    @JsonProperty("is_active")
    private boolean active; // true nếu có người ở
    private int numberOfMem;
}
