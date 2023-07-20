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
        return repo.findAll();
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

    public List<Advertise> findByType(String type) {
        return repo.findByType(type);
    }

    public List<Advertise> findByCategory(String category) {
        return repo.findByCategory(category);
    }

    public List<Advertise> findByLocalitation(String localitation) {
        return repo.findByLocalitation(localitation);
    }

    public List<Advertise> findByMultiple(String type, String category, String localitation){
        return repo.findByTypeAndCategoryAndLocalitation(type,category,localitation);
    }

    public List<Advertise> findByCategoryAndLocalitation(String category, String localitation){
        return repo.findByCategoryAndLocalitation(category, localitation);
    }
    public List<Advertise> findByCategoryAndType(String category, String type){
        return repo.findByCategoryAndType(category, type);
    }
    public List<Advertise> findByTypeAndLocalitation(String type, String localitation){
        return repo.findByTypeAndLocalitation(type, localitation);
    }



}
