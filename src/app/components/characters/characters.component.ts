import { CharactersService } from './../../services/characters.service';
import { Character } from '../../interfaces/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(private CharactersService: CharactersService) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    var observable = this.CharactersService.getCharacters().subscribe(characters => this.characters = characters);
    observable.unsubscribe()
  }

}
