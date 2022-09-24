package com.furama.furamamodule5.repository;

import com.furama.furamamodule5.entity.RentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentTypeRepository extends JpaRepository<RentType, Integer> {
}
