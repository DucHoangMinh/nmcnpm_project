package com.example.backend.controller;

import com.example.backend.dto.RoomDTO;
import com.example.backend.model.ResponseModel;
import com.example.backend.service.ServiceImpl.RoomServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {
    @Autowired
    private final RoomServiceImpl roomService;
    @PostMapping()
    public ResponseEntity<ResponseModel> createRoom(@RequestBody RoomDTO roomDTO) {
        try{
            RoomDTO newRoom = roomService.createRoom(roomDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Tạo phòng thành công",
                    newRoom
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping()
    public ResponseEntity<ResponseModel> getAllRooms() {
        try {
            List<RoomDTO> roomDTOList = roomService.getAllRooms();
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem tất cả phòng",
                    roomDTOList
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<ResponseModel> getRoomById(@PathVariable Long id) {
        try {
            RoomDTO roomDTO = roomService.getRoomById(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem phòng",
                    roomDTO
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping("/{address}")
    public ResponseEntity<ResponseModel> getRoomByAddress(@PathVariable String address) {
        try {
            RoomDTO roomDTO = roomService.getRoomByAddress(address);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem phòng",
                    roomDTO
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<ResponseModel> updateRoom(@PathVariable Long id, @RequestBody RoomDTO roomDTO) {
        try{
            RoomDTO newRoom = roomService.updateRoom(id, roomDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Cập nhật thành công",
                    newRoom
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }

    // Xóa ở đây là đánh dấu active:false, nghĩa là không có người ở
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseModel> deleteRoom(@PathVariable Long id) {
        try {
            roomService.deleteRoomById(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xóa phòng thành công",
                    ""
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
}
