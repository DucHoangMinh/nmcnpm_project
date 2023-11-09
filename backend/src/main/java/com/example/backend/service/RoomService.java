package com.example.backend.service;

import com.example.backend.dto.RoomDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoomService {
    RoomDTO createRoom(RoomDTO roomDTO);
    List<RoomDTO> getAllRooms();
    RoomDTO getRoomById(Long id);
    RoomDTO getRoomByAddress(String address);
    RoomDTO updateRoom(Long id, RoomDTO roomDTO);
    void deleteRoomById(Long id);
}
