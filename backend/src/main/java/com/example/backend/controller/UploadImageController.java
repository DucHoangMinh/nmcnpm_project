package com.example.backend.controller;

import com.example.backend.dto.PaymentImageDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Payment;
import com.example.backend.model.PaymentImage;
import com.example.backend.model.ResponseModel;
import com.example.backend.repository.PaymentImageRepository;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.service.PaymentService;
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
    // upload files
    @PostMapping(value = "/payment/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE )
    public ResponseEntity<ResponseModel> uploadBill(@PathVariable("id") Long paymentId, @ModelAttribute("file") List<MultipartFile> files) {
        try {
            Payment existingPayment = paymentRepository.findById(paymentId)
                    .orElseThrow(() -> new DataNotFoundException("Payment with id: " + paymentId + " doesn't exist"));
            files = files == null ? new ArrayList<MultipartFile>() : files;
            if (files.size() > 5) {
                return ResponseEntity.badRequest().body(new ResponseModel(
                        "failed",
                        "Couldn't upload more than 5 files at the same time",
                        ""
                ));
            }
            List<PaymentImage> paymentImages = new ArrayList<>();
            for (MultipartFile file: files) {
                if (file != null) {
                    if (file.getSize() == 0) continue;
                    // Check size of file and format
                    if (file.getSize() > 10*1024*1024) { // Size > 10MB
                        throw new ResponseStatusException(HttpStatus.PAYLOAD_TOO_LARGE, "File is too large");
                    }
                    String contentType = file.getContentType();
                    if (contentType == null  || !contentType.startsWith("image/"))  {
                        return ResponseEntity.badRequest().body(new ResponseModel("failed",
                                "File must be an image",
                                HttpStatus.UNSUPPORTED_MEDIA_TYPE
                                ));
                    }
                    // Save file and update thumbnail in Dto
                    String filename = storeFile(file);
                    // Save into payment in DB
                    PaymentImage paymentImage = paymentService.createPaymentImage(existingPayment.getId(),
                            PaymentImageDTO.builder().imageUrl(filename).build()
                    );
                    paymentImages.add(paymentImage);
                }
            }
            return ResponseEntity.ok(new ResponseModel(
                    "ok",
                    "Upload bill successfully!",
                    paymentImages.stream().map(paymentImage -> paymentImage.getImageUrl())
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(
                    "failed",
                    e.getMessage(),
                    ""
            ));
        }
    }
    // Store file with different names
    private String storeFile(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        // Add UUID before name of file to ensure that file's name is unique
        String uniqueFilename = UUID.randomUUID().toString() + "_" + fileName;
        // Path to directory that we want to store file
        java.nio.file.Path uploadDir = Paths.get("uploads");
        //Check and create directory if it doesn't exist
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        // Path to the file
        java.nio.file.Path destination = Paths.get(uploadDir.toString(), uniqueFilename);
        // Copy file to destination dir
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return uniqueFilename;
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
