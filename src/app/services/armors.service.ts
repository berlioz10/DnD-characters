import { of, Observable, Subject } from 'rxjs';
import { Armor } from '../interfaces/armor';
import { Armors } from './../mocks-lists/mock-armors';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  constructor() { }

  public armor$ = new Subject<Armor>();

  public armors$ = new Observable<Armor[]>();

  openArmors(): Observable<Armor[]> {
    return of(Armors)
  }

  getArmor(id: number): void {
    this.armor$.next(Armors.find(armor => armor.id === id))
  }
}
