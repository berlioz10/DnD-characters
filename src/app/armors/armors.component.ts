import { Armor } from './../interfaces/armor';
import { ArmorsService } from './../services/armors.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.css']
})
export class ArmorsComponent implements OnInit {

  armor: Armor;
  @Input() id: number;
  constructor(private armorsService: ArmorsService) { }

  ngOnInit(): void {
    this.getArmor(this.id)
  }

  getArmor(id: number): void {
    this.armorsService.getArmor(id).subscribe(armor => this.armor = armor)
  }

}
