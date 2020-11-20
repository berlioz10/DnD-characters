import { of, Observable } from 'rxjs';
import { Armor } from '../interfaces/armor';
import { Armors } from './../mocks-lists/mock-armors';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  constructor() { }

  getArmor(id: number): Observable<Armor> {
    return of(Armors.find(armor => armor.id == id))
  }
}
