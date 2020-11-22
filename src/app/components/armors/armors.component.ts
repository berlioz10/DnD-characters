import { Armor } from './../../interfaces/armor';
import { ArmorsService } from './../../services/armors.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'armor',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.css']
})
export class ArmorsComponent implements OnInit, OnChanges {

  armor: Armor;
  @Input() id: number;
  constructor(private armorsService: ArmorsService) { }

  ngOnInit(): void {
    this.armorsService.armor$.subscribe(armor => this.armor = armor)
    this.getArmor(this.id)
  }

  ngOnChanges(): void {
    this.getArmor(this.id)
  }

  getArmor(id: number): void {
    this.armorsService.getArmor(id)
  }

}
