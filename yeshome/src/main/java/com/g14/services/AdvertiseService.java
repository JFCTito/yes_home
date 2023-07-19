package com.g14.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g14.models.Advertise;
import com.g14.repositories.AdvertiseRepository;

@Service
public class AdvertiseService {
    
    @Autowired
    AdvertiseRepository repo;

    public List<Advertise> getAllAdvertise(){
        return (List<Advertise>) repo.findAll();
    }

    public void getAdvertiseById(Long id){
        repo.findById(id);
    }

    public void createAdvertise(Advertise ad){
        repo.save(ad);
    }

    public void updateAdvertise(Advertise ad){
        repo.save(ad);
    }

    public void deleteAdvertise(Advertise ad){
        repo.delete(ad);
    }


}
