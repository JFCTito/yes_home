package com.g14.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.g14.models.Advertise;
import java.util.List;

public interface AdvertiseRepository extends JpaRepository<Advertise, Long> {
    public List<Advertise> findByType(String type);

    public List<Advertise> findByCategory(String category);

    public List<Advertise> findByLocalitation(String localitation);

    public List<Advertise> findByTypeAndCategoryAndLocalitation(String type, String category, String localitation);

    public List<Advertise> findByCategoryAndLocalitation(String category, String localitation);

    public List<Advertise> findByCategoryAndType(String category, String type);

    public List<Advertise> findByTypeAndLocalitation(String type, String localitation);
}
