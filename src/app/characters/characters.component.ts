import { Component, OnInit } from '@angular/core';

import characters from './characters.json';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  url = '';
  items: any = characters;

  constructor() {}

  ngOnInit(): void {
  }

}
