import { WeaponsService } from './../../services/weapons.service';
import { Weapon } from '../../interfaces/weapon';
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'weapon',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnChanges, OnInit {

  @Input() id: number;
  weapon: Weapon;

  constructor(public weaponsService: WeaponsService) { }
  
  ngOnInit(): void {
    this.weaponsService.weapon$.subscribe( weapon => this.weapon = weapon)
    this.getWeapon(this.id)
  }

  ngOnChanges(): void {
    this.getWeapon(this.id)
  }

  getWeapon(id: number): void {
    this.weaponsService.getWeapon(id);
  }
}
