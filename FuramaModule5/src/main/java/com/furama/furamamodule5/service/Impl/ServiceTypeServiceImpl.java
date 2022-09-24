package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.entity.ServiceType;
import com.furama.furamamodule5.repository.ServiceTypeRepository;
import com.furama.furamamodule5.service.ServiceTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceTypeServiceImpl implements ServiceTypeService {
    @Autowired
    private ServiceTypeRepository serviceTypeRepository;

    @Override
    public List<ServiceType> findAll() {
        return serviceTypeRepository.findAll();
    }
}
