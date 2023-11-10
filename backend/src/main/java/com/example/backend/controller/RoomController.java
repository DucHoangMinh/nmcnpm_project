package com.example.backend.controller;

import com.example.backend.dto.RoomDTO;
import com.example.backend.model.ResponseModel;
import com.example.backend.service.ServiceImpl.RoomServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration;
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
    @GetMapping("/find")
    //http://localhost:8080/api/v1/rooms/find?id=2
    //http://localhost:8080/api/v1/rooms/find?address=B500
    public ResponseEntity<ResponseModel> getRoom(@RequestParam(value = "id", required = false) Long id, @RequestParam(value = "address",required = false) String address) {
        try {
            if (address != null) {
                RoomDTO roomDTO = roomService.getRoomByAddress(address);
                return ResponseEntity.ok(new ResponseModel(
                        "ok",
                        "Xem phòng",
                        roomDTO
                ));
            }
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

    @PatchMapping("/{id}")
    //http://localhost:8080/api/v1/rooms/3?active=false
    public ResponseEntity<ResponseModel> setActivate(@PathVariable Long id, @RequestParam("active") boolean active) {
        try{
            RoomDTO newRoom = roomService.activateRoom(id, active);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Cập nhật trạng thái phòng thành công",
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
