package com.basteez.rpgmaster.controllers;

import com.basteez.rpgmaster.entities.RpgCharacter;
import com.basteez.rpgmaster.repos.RpgCharacterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RpgCharactersController {
    @Autowired
	private RpgCharacterRepository repo;

    public RpgCharactersController(RpgCharacterRepository repo){
        this.repo = repo;
    }

    @GetMapping("/characters")
    public @ResponseBody List<RpgCharacter> getCharacters(){
        return (List<RpgCharacter>)repo.findAll();
    }

    @GetMapping("/characters/{id}")
    public Optional<RpgCharacter> findCharacterById(@PathVariable long id){
        return repo.findById(id);
    }

    @PostMapping("/add-character")
    public void addCharacter(RpgCharacter c){
        repo.save(c);
    }

    @PutMapping("/edit-character")
    public RpgCharacter editCharacter(@RequestBody RpgCharacter c){
        return repo.save(c);
    }

    @DeleteMapping("/delete-character/{id}")
    public void deleteCharacter(@PathVariable long id){
        repo.deleteById(id);
    }
}
