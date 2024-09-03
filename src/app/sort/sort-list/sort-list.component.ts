import { Component, OnInit } from '@angular/core';
import { Sort } from '../sort';
import { SortService } from '../sort.service';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrl: './sort-list.component.css'
})
export class SortListComponent implements OnInit {

  sorts: Sort[] = []

  constructor(private sortService: SortService){}

  ngOnInit() {
    this.getSorts();
  }

  public getSorts() : void {
    this.sortService.getSorts().subscribe(sorts => {
      this.sorts = sorts
    })
  }

}
