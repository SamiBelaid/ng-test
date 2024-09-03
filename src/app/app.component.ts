import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Champion } from './champion/champion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-technique-lol-app';

  champions: Champion[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getChampions();
  }

  public getChampions(): void {
    this.dataService.getChampions().subscribe({
      next: (data: Champion[]) => {
        this.champions = data;
        console.log('Champions:', this.champions);
      },
      error: (err) => console.error('Erreur lors de la récupération des champions:', err)
    });
  }
}
