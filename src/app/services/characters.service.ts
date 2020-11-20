import { Characters } from './mocks-lists/mock-characters';
import { Character } from './interfaces/character';
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
}
