package com.example.backend.controller;

import com.example.backend.dto.PaymentDTO;
import com.example.backend.dto.PaymentImageDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Payment;
import com.example.backend.model.PaymentImage;
import com.example.backend.model.ResponseModel;
import com.example.backend.payload.PaymentResponse;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.service.PaymentService;
import com.example.backend.utils.AppConstants;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    @PostMapping("")
    //http://localhost:8080/api/v1/payment?fee=3
    //Gắn phí cho tất cả các phòng
    public ResponseEntity<ResponseModel> setPaymentForAllRoom(@RequestParam("fee") Long feeId) {
        try {
            List<PaymentDTO> paymentDTOList = paymentService.setPaymentForAllRoom(feeId);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Thiết lập thanh toán cho các căn hộ thành công",
                    paymentDTOList
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
    // Lấy thông tin tất cả các thanh toán
    /*
    http://localhost:8080/api/v1/payment?pageSize=5
    http://localhost:8080/api/v1/payment?pageSize=5&pageNo=1
    http://localhost:8080/api/v1/payment?pageSize=5&pageNo=2
    http://localhost:8080/api/v1/payment?pageSize=5&pageNo=1&sortBy=title
    http://localhost:8080/api/v1/payment?pageSize=5&pageNo=1&sortBy=title&sortDir=asc
    */
    public ResponseEntity<ResponseModel> getAllPayments(  @RequestParam(value = "pageNo", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER, required = false) int pageNo,
                                                          @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE, required = false) int pageSize,
                                                          @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY, required = false) String sortBy,
                                                          @RequestParam(value = "sortDir", defaultValue = AppConstants.DEFAULT_SORT_DIRECTION, required = false) String sortDir) {
        try {
            PaymentResponse paymentResponse = paymentService.getAllPayment(pageNo, pageSize, sortBy, sortDir);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Xem tất cả các thanh toán",
                    paymentResponse
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
    //http://localhost:8080/api/v1/payment/find?room=2
    // Lấy thông tin các khoản thanh toán của một hộ
    public ResponseEntity<ResponseModel> getPaymentsOfRoom(@RequestParam("room") Long roomId) {
        try {
            List<PaymentDTO> paymentDTOS = paymentService.getPaymentsOfRoom(roomId);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Lấy thông tin các khoản thanh toán của hộ " + roomId,
                    paymentDTOS
            ));
        }  catch (Exception message) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    message.getMessage(),
                    ""
            ));
        }
    }

    @PostMapping("/pending")
    public ResponseEntity<ResponseModel> setPendingPayment(@RequestParam("room") Long roomId, @RequestParam("fee") Long feeId){
        try{
            Payment payment = paymentService.setPending(feeId, roomId);
            return ResponseEntity.ok().body(
                    new ResponseModel(
                            "ok",
                            "Set pending successfully!",
                            payment
                    )
            );
        }catch (Exception e){
            System.out.println(e.toString());
                return ResponseEntity.badRequest().body(
                        new ResponseModel(
                            "failed",
                                e.getMessage(),
                                ""
                        )
                );
        }
    }

    @PatchMapping("/complete")
    //http://localhost:8080/api/v1/payment/complete?room=1&fee=1
    //Đánh dấu hoàn thành phí nào đó cho căn hộ
    public ResponseEntity<ResponseModel> completePayment(@RequestParam("room") Long roomId, @RequestParam("fee") Long feeId) {
        try {
            PaymentDTO paymentDTO = paymentService.completePayment(roomId, feeId);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Đánh dấu đã thanh toán",
                    paymentDTO
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
