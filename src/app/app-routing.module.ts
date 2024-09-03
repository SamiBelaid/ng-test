import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChampionListComponent } from './champion/champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion/champion-detail/champion-detail.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { SortListComponent } from './sort/sort-list/sort-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'champions', component: ChampionListComponent },
  { path: 'sorts', component: SortListComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'champions/:id', component: ChampionDetailComponent },
  { path: 'champions/new', component: ChampionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
