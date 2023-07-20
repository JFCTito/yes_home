package com.g14.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g14.models.Profile;
import com.g14.repositories.ProfileRepostiry;

@Service
public class ProfileService {

    @Autowired
    ProfileRepostiry repo;

    public List<Profile> getAllUsers() {
        return repo.findAll();
    }

    public Profile getUser(Long id) {
        Optional<Profile> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Profile addUser(Profile profile) {
        return repo.save(profile);
    }

}
