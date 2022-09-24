package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.entity.Customer;
import com.furama.furamamodule5.repository.CustomerRepository;
import com.furama.furamamodule5.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer add(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer update(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public void delete(int id) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer!=null){
            customerRepository.delete(customer);
        }
    }

    @Override
    public Customer findById(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Customer> search(String name, String type) {
        return customerRepository.search(name, type);
    }

    @Override
    public List<Customer> findAllPageable(int index) {
        return customerRepository.findAllPageable(index);
    }

//    @Override
//    public List<Customer> searchPageable(String name, String type, int index) {
//        return customerRepository.searchPageable(name,type,index);
//    }
}
