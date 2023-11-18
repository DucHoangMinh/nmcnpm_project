package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Set;

public class RoomDTO {
    private Long id;
    private String address; // mã số phòng
    @JsonProperty("type_room")
    private String typeRoom;
    private Float area; // diện tích căn
}
