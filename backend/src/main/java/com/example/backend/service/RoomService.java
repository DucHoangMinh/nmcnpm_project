package com.example.backend.service;

import com.example.backend.dto.RoomDTO;
import com.example.backend.model.User;
import com.example.backend.payload.UserResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface RoomService {
    RoomDTO createRoom(RoomDTO roomDTO);
    List<RoomDTO> getAllRooms();
    RoomDTO getRoomById(Long id);
    List<RoomDTO> getRoomsByAddress(String address);
    RoomDTO updateRoom(Long id, RoomDTO roomDTO);
    void deleteRoomById(Long id);
    RoomDTO activateRoom(Long id, boolean active);
    List<RoomDTO> findListOfIncompleteRooms(Long feeId);
    List<Object[]> findIncompletedFee(Long roomId);
    List<Object[]> findCompletedFee(Long roomId);
    Set<UserResponse> getUserOfRoom(Long roomId);
    int getNumberOfMembers(Long roomId);
}
