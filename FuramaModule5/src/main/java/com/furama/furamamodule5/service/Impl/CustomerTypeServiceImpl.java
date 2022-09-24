package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.entity.CustomerType;
import com.furama.furamamodule5.repository.CustomerRepository;
import com.furama.furamamodule5.repository.CustomerTypeRepository;
import com.furama.furamamodule5.service.CustomerService;
import com.furama.furamamodule5.service.CustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeServiceImpl implements CustomerTypeService {
    @Autowired
    private CustomerTypeRepository customerTypeRepository;

    @Override
    public List<CustomerType> findAll() {
        return customerTypeRepository.findAll();
    }

}
