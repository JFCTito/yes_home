package com.g14.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g14.models.Advertise;
import com.g14.repositories.AdvertiseRepository;

@Service
public class AdvertiseService {

    @Autowired
    AdvertiseRepository repo;

    public List<Advertise> getAllAdvertise() {
        return (List<Advertise>) repo.findAll();
    }

    public Advertise getAdvertiseById(Long id) {
        Optional<Advertise> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Advertise createAdvertise(Advertise ad) {
        return repo.save(ad);
    }

    public Advertise updateAdvertise(Advertise ad) {
        return repo.save(ad);
        

    }

    public void deleteAdvertise(Advertise ad) {
        repo.delete(ad);
    }

}
