package com.g14.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g14.models.Advertise;
import com.g14.services.AdvertiseService;

@RestController
@RequestMapping("/advertisments")
public class AdvertiseController {
    
    @Autowired
    AdvertiseService adService;

    @GetMapping
    public List<Advertise> getAllAdvertise(){
       return adService.getAllAdvertise();
    }

    @GetMapping(path="/{id}")
    public void getAdvertiseById(@PathVariable("id") Long id){
        adService.getAdvertiseById(id);
    }

    @PostMapping
    public void createAdvertise(Advertise ad){
        adService.createAdvertise(ad);
    }

    @PutMapping
    public void updateAdvertise(Advertise ad){
        adService.updateAdvertise(ad);
    }

    @DeleteMapping
    public void deleteAdvertise(Advertise ad){
        adService.deleteAdvertise(ad);
    }

}
