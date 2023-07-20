package com.g14.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g14.models.Profile;
import com.g14.services.ProfileService;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    
    @Autowired
    ProfileService profileService;


    @GetMapping
    public List<Profile> getAllUsers(){
        return profileService.getAllUsers();
    } 
    

    @GetMapping("/{id}")
    public Profile getUser(@PathVariable Long id){
        return profileService.getUser(id);
    }

    @PostMapping
    public Profile addUser(Profile profile){
        return profileService.addUser(profile);
    }

}
