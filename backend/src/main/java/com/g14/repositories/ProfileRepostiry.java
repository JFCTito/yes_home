package com.g14.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.g14.models.Profile;

public interface ProfileRepostiry extends JpaRepository<Profile, Long>{
    
}
