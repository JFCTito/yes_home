package com.g14.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.g14.models.Advertise;
import com.g14.services.AdvertiseService;

@RestController
@RequestMapping("/advertisments")
public class AdvertiseController {

    @Autowired
    AdvertiseService adService;

    @GetMapping
    public List<Advertise> getAllAdvertise() {
        return adService.getAllAdvertise();
    }

    @GetMapping("/{id}")
    public Advertise getAdvertiseById(@PathVariable Long id) {
        return adService.getAdvertiseById(id);
    }

    @PostMapping
    public Advertise createAdvertise(Advertise ad) {
        return adService.createAdvertise(ad);
    }

    @PutMapping
    public Advertise updateAdvertise(Advertise ad) {
        return adService.updateAdvertise(ad);
    }

    @DeleteMapping
    public void deleteAdvertise(Advertise ad) {
        adService.deleteAdvertise(ad);
    }

    @GetMapping("/type/{type}")
    public List<Advertise> getAdvertisesByType(@PathVariable String type) {
        return adService.findByType(type);
    }

    @GetMapping("/localitation/{localitation}")
    public List<Advertise> getAdvertisesByLocalitation(@PathVariable String localitation) {
        return adService.findByLocalitation(localitation);
    }

    @GetMapping("/category/{category}")
    public List<Advertise> getAdvertisesByCategory(@PathVariable String category) {
        return adService.findByCategory(category);
    }

    // @GetMapping("/filter")
    // public List<Advertise> getAdvertisesByMultiple(@RequestParam String type, @RequestParam String category, @RequestParam String localitation){
    //     return adService.findByMultiple(type, category, localitation);
    // }

    @GetMapping("/filter/type/{type}/category/{category}/localitation/{localitation}")
    public List<Advertise> getAdvertisesByMultiplePath(@PathVariable("type") String type,@PathVariable("category") String category,@PathVariable("localitation") String localitation){
        return adService.findByMultiple(type,category,localitation);
    }

}