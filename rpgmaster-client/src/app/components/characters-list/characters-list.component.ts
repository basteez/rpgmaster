import { Component, OnInit, OnDestroy } from '@angular/core';

import { Character } from './../../models/character.model';
import { CharactersService } from './../../services/characters.service';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  charSub: Subscription;
  filteredName:string;

  constructor(private charService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.charSub = this.charService.charactersChanged.subscribe(characters=>{
      this.characters = characters;
    })
    this.charService.fetchCharacters();
    
  }

  ngOnDestroy(): void { 
      this.charSub.unsubscribe;
  }

  deleteChar(char:Character){
    console.log(char);
    this.charService.deleteCharacter(char);
  }

  viewChar(id:number){
    this.router.navigate(['character', 'view', +id]);
  }
}
