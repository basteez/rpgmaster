import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { Character } from './../../models/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit, OnDestroy {
  selectedChar: Character = null;
  charSub: Subscription;
  charForm: FormGroup;
  isEditMode:boolean=true;
  
  constructor(private charService: CharactersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.checkEditMode();
    this.charSub = this.charService.selectedCharacterChanged.subscribe(char=>{
      this.selectedChar = char;
      this.setForm(char);
    })
    this.route.params.subscribe((params:Params)=>{
      if(params['id']){
        this.charService.fetchCharacter(+params['id']);
        console.log(params);;
      }
    })
    this.charForm = new FormGroup({
      'id': new FormControl(null),
      'characterName': new FormControl(null,[ Validators.required]),
      'characterClass': new FormControl(null,[ Validators.required]),
      'imagePath': new FormControl(null,[ Validators.required]),
      'level': new FormControl(null,[ Validators.required]),
      'hp': new FormControl(null,[ Validators.required]),
      'strength': new FormControl(null,[ Validators.required]),
      'dexterity': new FormControl(null,[ Validators.required]),
      'constitution': new FormControl(null,[ Validators.required]),
      'intelligence': new FormControl(null,[ Validators.required]),
      'wisdom': new FormControl(null,[ Validators.required]),
      'charisma': new FormControl(null,[ Validators.required])
    })
  }

  ngOnDestroy(): void {
    this.charSub.unsubscribe();
  }

  editCharacter(){
    if(this.isEditMode){
      this.charService.editCharacter(this.selectedChar)
    }else{
      this.router.navigate(['/character', 'edit', this.selectedChar.id]);
      this.isEditMode = true;
    }
  }

  toggleSaveButton():boolean{
    if((this.isEditMode && !this.charForm.valid)){
      return true;
    }
    return false;
  }

  onSubmit(): void{
    let newChar: Character = this.charForm.value;
    if(this.isEditMode){
      this.charService.editCharacter(newChar)
      this.router.navigate(["/characters"]);
    }else{
      this.router.navigate(['/character', 'edit', this.selectedChar.id]);
      this.isEditMode = true;
    }
  }

  returnToList(){
    this.router.navigate(['/characters']);
  }

  setForm(char:Character){
    this.charForm.setValue({
      'id': char.id,
      'characterName': char.characterName,
      'characterClass': char.characterClass,
      'imagePath': char.imagePath,
      'level': char.level,
      'hp': char.hp,
      'strength': char.strength,
      'dexterity': char.dexterity,
      'constitution': char.constitution,
      'intelligence': char.intelligence,
      'wisdom': char.wisdom,
      'charisma': char.charisma,
    });

    this.isEditMode ? this.charForm.enable() : this.charForm.disable();
  }

  checkEditMode():void{
    if(this.router.url.indexOf("edit")> -1 || this.router.url.indexOf("new")> -1){
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }
}
