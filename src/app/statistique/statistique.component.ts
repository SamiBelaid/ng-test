import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';
import { firstValueFrom } from 'rxjs';
import Papa from 'papaparse';


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.css'
})
export class StatistiqueComponent implements OnInit {


  csvData: any[] = [];

  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {
      data: [],
      series: [{ type: 'line', xKey: 'creationTime', yKey: 'gameDuration' }]
    };
  }


  ngOnInit() {
    this.loadCSV();
  }

  loadCSV() {
    const csvFilePath = 'assets/games.csv'; 

    fetch(csvFilePath)
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            this.csvData = result.data;
            console.log(this.csvData);
            this.prepareChartData();
          }
        });
      });
  }

  prepareChartData() {
    const chartData = this.csvData.map(row => ({
      gameId: row.gameId,
      creationTime: new Date(parseInt(row.creationTime)),
      gameDuration: parseInt(row.gameDuration),
      winner: parseInt(row.winner),
    }));

    console.log(chartData);

    this.chartOptions = {
      data: chartData,
      series: [{ type: 'line', xKey: 'creationTime', yKey: 'gameDuration' }]
    };
  }


}
