import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Champion } from '../champion';
import { Tag } from '../tag.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css'
})
export class ChampionListComponent implements OnInit {
  champions: Champion[] = [];
  selectedTag: Tag | null = null;
  Tag = Tag;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getChampions();
  }

  public getChampions(): void {
    this.dataService.getChampions().subscribe(champions => {
      this.champions = champions;
    });
  };

  selectTag(tag: Tag): void {
    this.selectedTag = tag;
  };

  clearFilter(): void {
    this.selectedTag = null;
  };

  goToChampionDetail(champion: Champion){
    console.log("Le champion : " + champion.name);
    this.router.navigate(
      [`${this.router.url}`, champion.id]
    )
  };

  addChampion() {
    this.router.navigate(
      [`${this.router.url}/ajouter`]
    )
  };




}
