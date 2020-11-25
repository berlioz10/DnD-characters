import { Character } from './../../interfaces/character';
import { Spell } from './../../interfaces/spell';
import { Armor } from './../../interfaces/armor';
import { Weapon } from './../../interfaces/weapon';

import { SpellsService } from './../../services/spells.service';
import { ArmorsService } from './../../services/armors.service';
import { WeaponsService } from './../../services/weapons.service';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  private character: Character;
  weapons: Weapon[];
  armors: Armor[];
  yourSpells: Spell[];
  otherSpells: Spell[];
  spells: Spell[];

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    if (this.characterValue.hp > this.characterValue.max_hp) 
      this.characterValue.hp = this.characterValue.max_hp;
    if (this.characterValue.mp > this.characterValue.max_mp)
      this.characterValue.mp = this.characterValue.max_mp;
  }

  get characterValue() {
    return this.character
  }

  set characterValue(character: Character) {
    this.character = character
  }

  constructor(private charactersService: CharactersService,
              private weaponsService: WeaponsService,
              private armorsService: ArmorsService,
              private spellsService: SpellsService,
              private route: ActivatedRoute,
              private location: Location
              ) { }

  
  ngOnInit(): void {
    this.getCharacter();
  } 
  
  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.charactersService.getCharacter(id).subscribe(character => this.characterValue = character);
  }

  getWeapons(): void {
    var observable = this.weaponsService.getWeapons().subscribe(weapons => this.weapons = weapons);
    observable.unsubscribe()
  }

  setWeapon(id_weapon: number): void {
    this.characterValue.id_weapon = id_weapon
  }

  clearWeapons(): void {
    this.weapons = null;
  }

  getArmors(): void {
    var observable = this.armorsService.openArmors().subscribe(armors => this.armors = armors);
    observable.unsubscribe()
  }

  setArmor(id_armor: number): void {
    this.characterValue.id_armor = id_armor;
  }

  clearArmors(): void {
    this.armors = null;
  }

  getOtherSpells(): void {
    var observable = this.spellsService.getSpells().subscribe(spells => this.otherSpells = spells);
    observable.unsubscribe()
  }

  getYourSpells(): void{
    var observable = this.spellsService.getSpells().subscribe(spells => this.yourSpells = spells);
    observable.unsubscribe()
  }

  clearSpells(): void {
    this.yourSpells = null;
    this.otherSpells = null;
  }

  addSpell(id: number): void {
    if (this.characterValue.id_spell.indexOf(id) != -1) {
      console.error("Already exists");
    }
    else {
      this.characterValue.id_spell.push(id)
    }
  }

  removeSpell(id: number): void {
    let index = this.characterValue.id_spell.indexOf(id)
    if(index == -1) {
      console.error("Doesn't exist");
    }
    else {
      this.characterValue.id_spell.splice(index, 1)
      console.log(this.characterValue.id_spell)
    }
  }

  goBack(): void {
    if (this.characterValue.hp > this.characterValue.max_hp) 
      this.characterValue.hp = this.characterValue.max_hp;
    if (this.characterValue.mp > this.characterValue.max_mp)
      this.characterValue.mp = this.characterValue.max_mp;
    this.location.back();
  }
}
