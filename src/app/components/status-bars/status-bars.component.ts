import { Character } from './../../interfaces/character';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'status-bars',
  templateUrl: './status-bars.component.html',
  styleUrls: ['./status-bars.component.css']
})
export class StatusBarsComponent implements OnInit {

  @Input() character: Character;
  hp_bar: any;
  mp_bar: any;
  constructor() { }

  ngOnInit(): void {
    this.hp_bar = 200 / this.character.max_hp * this.character.hp + "px";
    this.mp_bar = 200 / this.character.max_mp * this.character.mp + "px";
  }

  addHealth(): void {
    if(this.character.hp < this.character.max_hp) {
      this.character.hp += 1;
      this.hp_bar = 200 / this.character.max_hp * this.character.hp + "px"
    }
  }

  removeHealth(): void {
    if(this.character.hp > 0) {
      this.character.hp -= 1;
      this.hp_bar = 200 / this.character.max_hp * this.character.hp + "px"
    }
  }

  removeMana(): void {
    if(this.character.mp > 0) {
      this.character.mp -= 1;
      this.mp_bar = 200 / this.character.max_mp * this.character.mp + "px"
    }
  }

  addMana(): void {
    if(this.character.mp < this.character.max_mp) {
      this.character.mp += 1;
      this.mp_bar = 200 / this.character.max_mp * this.character.mp + "px"
    }
  }

  removeMoney(): void {
    if(this.character.money > 0) {
      this.character.money -= 1;
    }
  }

  addMoney(): void {
    this.character.money += 1;
  }
}
