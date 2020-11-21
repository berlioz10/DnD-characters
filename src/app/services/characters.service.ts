import { Characters } from './../mocks-lists/mock-characters';
import { Character } from './../interfaces/character';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  getCharacters(): Observable<Character[]> { 
    return of(Characters);
  }

  getCharacter(id: number): Observable<Character> {
    return of(Characters.find(character => character.id === id));
  }

  changeWeapon(character: Character, id_weapon: number): void {
    let index = Characters.indexOf(character)

    Characters[index].id_weapon = id_weapon
  }
}
