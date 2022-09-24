package com.furama.furamamodule5.service;

import com.furama.furamamodule5.entity.Service;

import java.util.List;

public interface ServiceService {
    List<Service> findAll();
    Service add(Service service);
    Service update(Service service);
    void delete(int id);
    Service findById(int id);
    List<Service> search(String name, String rentType, String serviceType);
    List<Service> findAllPageable(int index);
}
