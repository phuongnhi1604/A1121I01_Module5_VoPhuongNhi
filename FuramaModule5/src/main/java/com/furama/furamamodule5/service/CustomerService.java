package com.furama.furamamodule5.service;

import com.furama.furamamodule5.entity.Customer;
import com.furama.furamamodule5.entity.CustomerType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomerService {
    List<Customer> findAll();
    Customer add(Customer customer);
    Customer update(Customer customer);
    void delete(int id);
    Customer findById(int id);
    List<Customer> search(String name, String type);

    List<Customer> findAllPageable(int index);
//    List<Customer> searchPageable(String name, String type, int index);
}
