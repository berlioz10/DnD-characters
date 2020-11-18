import { CharactersService } from './../characters.service';
import { Character } from './../character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  url = '';
  characters: Character[];

  constructor(private CharactersService: CharactersService) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.CharactersService.getCharacters().subscribe(characters => this.characters = characters);
  }

}
