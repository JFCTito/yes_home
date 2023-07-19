package com.g14.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g14.models.Profile;
import com.g14.repositories.ProfileRepostiry;

@Service
public class ProfileService {
    
    @Autowired
    ProfileRepostiry repo;

    public void getUser(Long id){
        repo.findById(id);
    }

    public void addUser(Profile profile){
        repo.save(profile);
    }

}
