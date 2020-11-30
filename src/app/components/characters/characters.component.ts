import { Character } from './../../interfaces/character';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  new_id: number = 0

  constructor(private CharactersService: CharactersService) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.CharactersService.getCharacters().subscribe(characters => this.characters = characters);
  }

  addCharacter(): void {
    this.characters.forEach(character => {
      if (character.id < this.new_id) {
        this.new_id = character.id
      }
    })

    let character: Character = {
      id: this.new_id,
      max_hp: 0,
      hp: 0,
      max_mp: 0,
      mp: 0,
      money: 10,
      name: "",
      race: "",
      id_weapon: 0,
      id_armor: 0,
      id_spell: []
    }

    this.characters.push(character)
  }

  deleteCharacters(character: Character): void {
    let index = this.characters.indexOf(character)
    this.characters.splice(index, 1)
  }
}
