import { Character } from './../../interfaces/character';
import { Spell } from './../../interfaces/spell';
import { Armor } from './../../interfaces/armor';
import { Weapon } from './../../interfaces/weapon';

import { SpellsService } from './../../services/spells.service';
import { ArmorsService } from './../../services/armors.service';
import { WeaponsService } from './../../services/weapons.service';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  private character: Character;
  weapons: Weapon[];
  armors: Armor[];
  spells: Spell[];

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

  get characterValue() {
    return this.character
  }

  set characterValue(character: Character) {
    this.character = character
  }

  getWeapons(): void {
    this.weaponsService.getWeapons().subscribe(weapons => this.weapons = weapons);
  }

  setWeapon(id_weapon: number): void {
    this.characterValue.id_weapon = id_weapon
  }

  clearWeapons(): void {
    this.weapons = null;
  }

  getArmors(): void {
    this.armorsService.getArmors().subscribe(armors => this.armors = armors);
  }

  setArmor(id_armor: number): void {
    this.characterValue.id_armor = id_armor;
  }

  clearArmors(): void {
    this.armors = null;
  }

  getSpells(): void {
    this.spellsService.getSpells().subscribe(spells => this.spells = spells);
  }

  clearSpells(): void {
    this.spells = null;
  }

  addSpell(): void {

  }

  removeSpell(): void {

  }

  goBack(): void {
    this.location.back();
  }
}
