package com.basteez.rpgmaster.repos;

import com.basteez.rpgmaster.entities.RpgCharacter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RpgCharacterRepository extends CrudRepository<RpgCharacter, Long> {
}
