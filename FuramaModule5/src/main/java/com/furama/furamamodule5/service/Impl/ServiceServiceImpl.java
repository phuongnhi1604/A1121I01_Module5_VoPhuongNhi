package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.repository.ServiceRepository;
import com.furama.furamamodule5.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceServiceImpl implements ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public List<com.furama.furamamodule5.entity.Service> findAll() {
        return serviceRepository.findAll();
    }

    @Override
    public com.furama.furamamodule5.entity.Service add(com.furama.furamamodule5.entity.Service service) {
        return serviceRepository.save(service);
    }

    @Override
    public com.furama.furamamodule5.entity.Service update(com.furama.furamamodule5.entity.Service service) {
        return serviceRepository.save(service);
    }

    @Override
    public void delete(int id) {
        com.furama.furamamodule5.entity.Service service = serviceRepository.findById(id).orElse(null);
        if (service!=null){
            serviceRepository.delete(service);
        }
    }

    @Override
    public com.furama.furamamodule5.entity.Service findById(int id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @Override
    public List<com.furama.furamamodule5.entity.Service> search(String name, String rentType, String serviceType) {
        return serviceRepository.search(name, rentType, serviceType);
    }

    @Override
    public List<com.furama.furamamodule5.entity.Service> findAllPageable(int index) {
        return serviceRepository.findAllPageable(index);
    }
}
