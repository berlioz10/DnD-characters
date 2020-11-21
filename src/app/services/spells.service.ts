import { Spell } from './../interfaces/spell';
import { Spells } from './../mocks-lists/mock-spells';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor() { }

  getSpell(id: number): Observable<Spell> {
    return of(Spells.find(spell => spell.id == id))
  }

  getSpells(): Observable<Spell[]> {
    return of(Spells)
  }
}
