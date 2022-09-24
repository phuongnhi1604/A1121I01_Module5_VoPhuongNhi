package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.entity.RentType;
import com.furama.furamamodule5.repository.RentTypeRepository;
import com.furama.furamamodule5.service.RentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentTypeServiceImpl implements RentTypeService {
    @Autowired
    private RentTypeRepository rentTypeRepository;

    @Override
    public List<RentType> findAll() {
        return rentTypeRepository.findAll();
    }
}
