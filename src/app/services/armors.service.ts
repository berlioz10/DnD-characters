import { of, Observable, Subject } from 'rxjs';
import { Armor } from '../interfaces/armor';
import { Armors } from './../mocks-lists/mock-armors';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  constructor() { }

  openArmors(): Observable<Armor[]> {
    return of(Armors)
  }

  getArmor(id: number): Observable<Armor> {
    return of(Armors.find(armor => armor.id === id))
  }
}
