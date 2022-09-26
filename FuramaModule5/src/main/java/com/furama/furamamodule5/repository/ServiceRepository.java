package com.furama.furamamodule5.repository;

import com.furama.furamamodule5.entity.Customer;
import com.furama.furamamodule5.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Integer> {
    @Query(value = "select * from service where service_name like concat('%',:name,'%') and rent_type_id like concat('%',:rentType,'%') and service_type_id like concat('%',:serviceType,'%')", nativeQuery = true)
    List<Service> search(@RequestParam("name") String name, @RequestParam("rentType") String rentType, @RequestParam("serviceType") String serviceType);
    @Query(value = "select * from service as s join rent_type as rent on s.rent_type_id = rent.rent_type_id join service_type as st on s.service_type_id = st.service_type_id group by s.service_id limit ?1,9;", nativeQuery = true)
    List<Service> findAllPageable(int index);
}
