package com.g14.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/filter")
    public List<Advertise> getAdvertisesByFilter(@RequestParam(required = false) String type,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String localitation) {
        if (type != null && category != null && localitation != null) {
            return adService.findByMultiple(type, category, localitation);
        } else if (category != null && localitation != null) {
            return adService.findByCategoryAndLocalitation(category, localitation);
        } else if (category != null && type != null) {
            return adService.findByCategoryAndType(category, type);
        } else if (type != null && localitation != null) {
            return adService.findByTypeAndLocalitation(type, localitation);
        } else if (type != null) {
            return adService.findByType(type);
        } else if (category != null) {
            return adService.findByCategory(category);
        } else if (localitation != null) {
            return adService.findByLocalitation(localitation);
        } else {
            return adService.getAllAdvertise();
        }
    }

}