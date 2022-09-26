package com.furama.furamamodule5.service.Impl;

import com.furama.furamamodule5.entity.Contract;
import com.furama.furamamodule5.repository.ContractRepository;
import com.furama.furamamodule5.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractServiceImpl implements ContractService {
    @Autowired
    private ContractRepository contractRepository;
    @Override
    public List<Contract> findAll() {
        return contractRepository.findAll();
    }

    @Override
    public Contract add(Contract contract) {
        return contractRepository.save(contract);
    }

    @Override
    public List<Contract> search(String startDay, String endDay, String customer_id, String service_id) {
        return contractRepository.search(startDay,endDay,customer_id,service_id);
    }

    @Override
    public List<Contract> findAllPageable(int index) {
        return contractRepository.findAllPageable(index);
    }
}
