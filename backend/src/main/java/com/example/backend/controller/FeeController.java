package com.example.backend.controller;

import com.example.backend.dto.FeeDTO;
import com.example.backend.model.ResponseModel;
import com.example.backend.service.FeeService;
import com.example.backend.service.ServiceImpl.FeeServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController()
@RequestMapping("/api/v1/fee")
@RequiredArgsConstructor
public class FeeController {
    @Autowired
    private final FeeServiceImpl feeService;
    @PostMapping("")
    public ResponseEntity<ResponseModel> createFee(@RequestBody FeeDTO feeDTO) {
        try {
            FeeDTO newFee = feeService.createFee(feeDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Tạo phí mới thành công",
                    newFee
            ));
        } catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }
    @GetMapping("")
    public ResponseEntity<ResponseModel> getAllFees() {
        List<FeeDTO> allFees = feeService.getAllFees();
        return ResponseEntity.ok(new ResponseModel(
                "ok",
                "Lấy tất cả thông tin phí thành công",
                allFees
        ));
    }
    @GetMapping("/{id}")
    public ResponseEntity<ResponseModel> getFeeById(@PathVariable Long id) {
        try{
            FeeDTO feeDTO = feeService.getFeeById(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Lấy phí với id: " + id + " thành công",
                    feeDTO
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
    public ResponseEntity<ResponseModel> updateFee(@PathVariable Long id, @RequestBody FeeDTO feeDTO) {
        try {
            FeeDTO updatedFee = feeService.updateFee(id, feeDTO);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Cập nhật phí thành công",
                    updatedFee
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
    public ResponseEntity<ResponseModel> deleteFeeById(@PathVariable Long id) {
        try {
            feeService.deleteFee(id);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xóa phí thành công",
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
