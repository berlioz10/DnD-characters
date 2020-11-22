import { Observable, of, Subject } from 'rxjs';
import { Weapons } from './../mocks-lists/mock-weapons';
import { Injectable } from '@angular/core';
import { Weapon } from '../interfaces/weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor() { }

  public weapon$ = new Subject<Weapon>() 

  getWeapons(): Observable<Weapon[]> {
    return of(Weapons);
  }
  
  getWeapon(id: number): void {
    this.weapon$.next(Weapons.find(weapon => weapon.id === id));
  }
}
