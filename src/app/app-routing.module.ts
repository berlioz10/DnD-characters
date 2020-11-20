import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent },
  {path: 'detail/:id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
