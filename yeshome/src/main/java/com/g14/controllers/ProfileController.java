package com.g14.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g14.models.Profile;
import com.g14.services.ProfileService;

@RestController
@RequestMapping("/profile")
public class ProfileController {
    
    @Autowired
    ProfileService profileService;

    @GetMapping("/{id}")
    public void getUser(@PathVariable("id") Long id){
        profileService.getUser(id);
    }

    @PostMapping
    public void addUser(Profile profile){
        profileService.addUser(profile);
    }

}
