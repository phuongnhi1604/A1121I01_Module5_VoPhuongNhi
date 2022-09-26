package com.furama.furamamodule5.repository;

import com.furama.furamamodule5.entity.Contract;
import com.furama.furamamodule5.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Integer> {
    @Query(value = "select * from contract where contract_start_date like concat('%',:startDay,'%') and contract_end_date like concat('%',:endDay,'%') and customer_id like concat('%',:customer_id,'%') and service_id like concat('%',:service_id,'%')", nativeQuery = true)
    List<Contract> search(@RequestParam("startDay") String startDay, @RequestParam("endDay") String endDay, @RequestParam("customer_id") String customer_id, @RequestParam("service_id") String service_id);
    @Query(value = "select * from contract as c join service as s on c.service_id = s.service_id join customer as cus on c.customer_id = cus.customer_id group by c.contract_id limit ?1,5;", nativeQuery = true)
    List<Contract> findAllPageable(int index);
}
