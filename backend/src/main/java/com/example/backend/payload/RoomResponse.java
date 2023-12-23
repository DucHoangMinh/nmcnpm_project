package com.example.backend.payload;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomResponse {
    private Long id;
    private String address; // mã số phòng
    private String typeRoom;
    private Float area; // diện tích căn
    private boolean active; // true nếu có người ở
    private int number_of_peoples;
}
