package com.furama.furamamodule5.repository;

import com.furama.furamamodule5.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select * from customer where customer_name like concat('%',:name,'%') and customer_type_id like concat('%',:type,'%')", nativeQuery = true)
    List<Customer> search(@RequestParam("name") String name, @RequestParam("type") String type);

    @Query(value = "select * from customer as cus join customer_type as type on cus.customer_type_id = type.customer_type_id group by cus.customer_id limit ?1,5;", nativeQuery = true)
    List<Customer> findAllPageable(int index);

//    @Query(value = "select * from customer as cus join customer_type as ctype on cus.customer_type_id = ctype.customer_type_id where cus.customer_name like concat('%',:name,'%') and cus.customer_type_id like concat('%',:type,'%') group by cus.customer_id limit ?1,5", nativeQuery = true)
//    List<Customer> searchPageable(@RequestParam("name") String name, @RequestParam("type") String type, int index);
}
