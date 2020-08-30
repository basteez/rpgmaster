import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Character} from './../models/character.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  charactersChanged:Subject<Character[]> = new Subject();
  selectedCharacterChanged:Subject<Character> = new Subject();
  characters:Character[] = [];
  selectedCharacter:Character = null;

  constructor(private http:HttpClient) { }

  fetchCharacters(){
    this.http.get<Character[]>("//localhost:8080/characters").subscribe(characters=>{
      console.log(characters);
      this.characters = characters;
      this.charactersChanged.next(this.characters.slice());
    });
  }

  fetchCharacter(id:number){
    this.http.get<Character>("//localhost:8080/characters/"+id).subscribe(char=>{
      this.selectedCharacter = char;
      this.selectedCharacterChanged.next(this.selectedCharacter);
    });
  }

  editCharacter(char:Character){
    console.log(char)
    this.http.put("//localhost:8080/edit-character/", char).subscribe(response=>{
      console.log(response);
      let charIndex = this.characters.indexOf(char);
      this.characters[charIndex] = char;
      this.charactersChanged.next(this.characters.slice());
    })
  }

  deleteCharacter(char:Character){
    this.http.delete("//localhost:8080/delete-character/"+char.id).subscribe(response=>{
      let charIndex = this.characters.indexOf(char);
      this.characters.splice(charIndex, 1);
      this.charactersChanged.next(this.characters.slice());
    })
  }

}
