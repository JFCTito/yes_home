package com.g14.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.g14.models.Advertise;

public interface AdvertiseRepository extends JpaRepository<Advertise, Long>{
    
}
