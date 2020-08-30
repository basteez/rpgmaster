package com.basteez.rpgmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RpgCharacter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String characterName;
    private String characterClass;
    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;
    private int hp;
    private String imagePath;
    private int level;

    public RpgCharacter(){}

    public RpgCharacter(String chName, String chClass, int str, int dex, int con, int intl, int wis, int cha, int hp, String imagePath, int level){
        this.characterName = chName;
        this.characterClass = chClass;
        this.strength = str;
        this.dexterity = dex;
        this.constitution = con;
        this.intelligence = intl;
        this.wisdom = wis;
        this.charisma = cha;
        this.hp = hp;
        this.imagePath = imagePath;
        this.level = level;
    }

    @Override
    public String toString(){
        String lineSeparator = "\n";
        StringBuilder sb = new StringBuilder();
        sb.append("Character Name: ").append(this.getCharacterName()).append(lineSeparator)
                .append("Character Class: ").append(this.getCharacterClass()).append(lineSeparator)
                .append("HP: ").append(this.getHp()).append(lineSeparator)
                .append("Strength: ").append(this.getStrength()).append(lineSeparator)
                .append("Dexterity: ").append(this.getDexterity()).append(lineSeparator)
                .append("Constitution: ").append(this.getConstitution()).append(lineSeparator)
                .append("Intelligence: ").append(this.getIntelligence()).append(lineSeparator)
                .append("Wisdom: ").append(this.getWisdom()).append(lineSeparator)
                .append("Charisma: ").append(this.getCharisma()).append(lineSeparator)
                .append("Level: ").append(this.getLevel()).append(lineSeparator)
                .append("Image Path: ").append(this.getImagePath()).append(lineSeparator);
        return sb.toString();
    }

    //GETTERS AND SETTERS
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCharacterName() {
        return characterName;
    }

    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getDexterity() {
        return dexterity;
    }

    public void setDexterity(int dexterity) {
        this.dexterity = dexterity;
    }

    public int getConstitution() {
        return constitution;
    }

    public void setConstitution(int constitution) {
        this.constitution = constitution;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getWisdom() {
        return wisdom;
    }

    public void setWisdom(int wisdom) {
        this.wisdom = wisdom;
    }

    public int getCharisma() {
        return charisma;
    }

    public void setCharisma(int charisma) {
        this.charisma = charisma;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
