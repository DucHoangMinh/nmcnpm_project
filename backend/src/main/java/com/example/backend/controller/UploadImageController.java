package com.example.backend.controller;

import com.example.backend.dto.PaymentImageDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Payment;
import com.example.backend.model.PaymentImage;
import com.example.backend.model.ResponseModel;
import com.example.backend.repository.PaymentImageRepository;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.service.PaymentService;
import com.example.backend.service.UploadService;
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
@RequiredArgsConstructor
@RequestMapping("/api/v1/upload")
public class UploadImageController {
    private final PaymentService paymentService;
    private final PaymentRepository paymentRepository;
    private final PaymentImageRepository paymentImageRepository;
    private final UploadService uploadService;
    // upload files
    @PostMapping("/payment/{id}")
    public ResponseEntity<ResponseModel> uploadBill(@PathVariable("id") Long paymentId, @RequestParam("file") MultipartFile multipartFile) {
        try{
            Payment existingPayment = paymentRepository.findById(paymentId)
                   .orElseThrow(() -> new DataNotFoundException("Payment with id: " + paymentId + " doesn't exist"));
            String imageUrl = uploadService.upload(multipartFile);
            PaymentImage paymentImage = paymentService.createPaymentImage(existingPayment.getId(), PaymentImageDTO.builder().imageUrl(imageUrl).build());
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Upload bill successfully!",
                    paymentImage
          ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    e.getMessage(),
                    ""
            ));
        }

    }
    // Hiển thị ra hóa đơn đã up
    @GetMapping("/payment/{id}")
    public ResponseEntity<ResponseModel> loadBill(@PathVariable("id") Long paymentId) {
        try {
            Payment payment = paymentRepository.findById(paymentId)
                    .orElseThrow(() -> new DataNotFoundException("Cannot find payment with id: "+ paymentId));
            List<PaymentImage> paymentImages = paymentImageRepository.findByPaymentId(paymentId);
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Load hóa đơn thành công",
                    paymentImages.stream().map(paymentImage -> paymentImage.getImageUrl() )
                    ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    e.getMessage(),
                    ""
            ));
        }
    }
}
