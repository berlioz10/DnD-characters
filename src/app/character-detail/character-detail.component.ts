import { CharactersService } from './../characters.service';
import { Character } from './../character';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;

  constructor(private CharactersService: CharactersService, 
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.CharactersService.getCharacter(id).subscribe(character => this.character = character);
  }

}
