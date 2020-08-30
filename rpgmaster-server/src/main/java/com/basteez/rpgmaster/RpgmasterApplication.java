package com.basteez.rpgmaster;

import com.basteez.rpgmaster.entities.RpgCharacter;
import com.basteez.rpgmaster.repos.RpgCharacterRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class RpgmasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(RpgmasterApplication.class, args);
	}

	@Bean
	CommandLineRunner init(RpgCharacterRepository repo){
		return args -> {
			Stream.of(
					//RpgCharacter(String chName, String chClass, int str, int dex, int con, int intl, int wis, int cha, int hp)
					new RpgCharacter("Marcus ", "Warrior", 18, 16, 16, 13, 10, 12, 10, "https://bit.ly/32GhPue",10 ),
					new RpgCharacter("Catalina", "Mage", 10, 12, 11, 17, 15, 10, 7, "https://bit.ly/3hAOurs",3 ),
					new RpgCharacter("Pip", "Bard", 10, 16, 12, 13, 10, 18, 8, "https://bit.ly/3hFfI01", 6 ),
					new RpgCharacter("Igniatius Cassio", "Wizard", 10, 16, 12, 13, 18, 18, 8, "https://bit.ly/3hKtK0w", 16 ),
					new RpgCharacter("Caius Cosades", "Fighter", 10, 16, 12, 13, 10, 18, 8, "https://bit.ly/3b6BuHy", 99 ),
					new RpgCharacter("Uriel Septim", "King", 10, 16, 12, 13, 10, 18, 8, "https://bit.ly/3lqrYEd", 100 ),
					new RpgCharacter("Jiub", "Prisoner", 10, 16, 12, 13, 10, 18, 8, "https://bit.ly/3jr4UDn", 1 )
			).forEach(rpgCharacter -> {
				repo.save(rpgCharacter);
			});
			repo.findAll().forEach(System.out::println);
		};
	}

}
