package com.example.backend.service.ServiceImpl;

import com.example.backend.dto.FeeDTO;
import com.example.backend.exception.DataNotFoundException;
import com.example.backend.model.Fee;
import com.example.backend.model.ResponseModel;
import com.example.backend.repository.FeeRepository;
import com.example.backend.service.FeeService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
@Data
@RequiredArgsConstructor
public class FeeServiceImpl implements FeeService {
    private final FeeRepository feeRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<FeeDTO> getAllFees() {
        List<Fee> fees =  feeRepository.findAll();
        return fees.stream().map(fee -> modelMapper.map(fee, FeeDTO.class)).toList();
    }
    @Override
    public FeeDTO getFeeById(Long id) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        FeeDTO feeDTO = modelMapper.map(fee, FeeDTO.class);
        return feeDTO;
    }

    @Override
    public FeeDTO createFee(FeeDTO feeDTO) {
        Fee fee = modelMapper.map(feeDTO, Fee.class);
        Fee newFee = feeRepository.save(fee);
        feeDTO.setId(newFee.getId());
        return feeDTO;
    }

    @Override
    public FeeDTO updateFee(Long id, FeeDTO newFeeDTO) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        fee.setName(newFeeDTO.getName());
        fee.setDescription(newFeeDTO.getDescription());
        fee.setPrice(newFeeDTO.getPrice());
        fee.setUpdatedAt(LocalDateTime.now());
        fee.setDueTime(newFeeDTO.getDueTime());
        fee.setMandatory(newFeeDTO.isMandatory());
        feeRepository.save(fee);
        newFeeDTO.setId(id);
        return newFeeDTO;
    }

    @Override
    public void deleteFee(Long id) {
        Fee fee = feeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find fee with id: " + id));
        feeRepository.delete(fee);
    }
}
