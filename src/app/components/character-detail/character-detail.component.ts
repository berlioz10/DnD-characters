import { CharactersService } from './../../services/characters.service';
import { Character } from '../../interfaces/character';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;

  constructor(private charactersService: CharactersService, 
              private route: ActivatedRoute,
              private location: Location
              ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.charactersService.getCharacter(id).subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }
}
