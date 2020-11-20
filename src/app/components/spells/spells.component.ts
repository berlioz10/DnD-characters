import { SpellsService } from '../../services/spells.service';
import { Spell } from '../../interfaces/spell';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spell',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spell: Spell;
  @Input() id: number;

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.getSpell(this.id)
  }

  getSpell(id: number): void {
    this.spellsService.getSpell(id).subscribe(spell => this.spell = spell)
  }
}
