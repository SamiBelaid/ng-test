import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Champion } from '../champion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrl: './champion-search.component.css'
})
export class ChampionSearchComponent {
  champions: Champion[] = [];
  filteredChampions: Champion[] = [];
  searchTerm: string = '';
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getChampions();
  };

  public getChampions(): void {
    this.dataService.getChampions().subscribe(champions => {
      this.champions = champions;
      this.filteredChampions = [];
    });
  };

  goToChampionDetail(champion: Champion){
    console.log("Le champion : " + champion.name);
    this.router.navigate(
      [`champions/`, champion.id]
    )
  };

  // *** Rechercher un champion par son nom *** //
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredChampions = [];
    } else {
      this.filteredChampions = this.champions.filter(champion =>
        champion.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
    if (this.filteredChampions.length > 0) {
      document.querySelector('.search-container')?.classList.add('has-results');
    } else {
      document.querySelector('.search-container')?.classList.remove('has-results');
    }
  }
}
