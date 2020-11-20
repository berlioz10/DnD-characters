import { WeaponsService } from './../../services/weapons.service';
import { Weapon } from '../../interfaces/weapon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weapon',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  weapon: Weapon;
  @Input() id: number;

  constructor(private weaponService: WeaponsService) { }

  ngOnInit(): void {
    this.getWeapon(this.id);
  }

  getWeapon(id: number): void {
    this.weaponService.getWeapon(id).subscribe(weapon => this.weapon = weapon)
  }
}
