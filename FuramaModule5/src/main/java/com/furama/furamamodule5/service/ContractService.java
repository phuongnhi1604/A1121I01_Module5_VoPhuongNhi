package com.furama.furamamodule5.service;

import com.furama.furamamodule5.entity.Contract;
import com.furama.furamamodule5.entity.Customer;

import java.util.List;

public interface ContractService {
    List<Contract> findAll();
    Contract add(Contract contract);
    List<Contract> search(String startDay, String endDay, String customer_id, String service_id);
    List<Contract> findAllPageable(int index);
}
