import { Observable, of } from 'rxjs';
import { Weapons } from './../mocks-lists/mock-weapons';
import { Injectable } from '@angular/core';
import { Weapon } from './../interfaces/weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor() { }

  getWeapons(): Observable<Weapon[]> {
    return of(Weapons);
  }
  
  getWeapon(id: number): Observable<Weapon> {
    return of(Weapons.find(weapon => weapon.id === id));
  }
}
