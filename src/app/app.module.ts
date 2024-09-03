import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChampionListComponent } from './champion/champion-list/champion-list.component';
import { ChampionSearchComponent } from './champion/champion-search/champion-search.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChampionDetailComponent } from './champion/champion-detail/champion-detail.component';
import { FilterByTagPipe } from './champion/champion-list/filter-by-tag.pipe';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SortListComponent } from './sort/sort-list/sort-list.component';
import { AgCharts } from 'ag-charts-angular';

@NgModule({
    declarations: [
        AppComponent,
        ChampionListComponent,
        ChampionSearchComponent,
        HomeComponent,
        StatistiqueComponent,
        SortListComponent,
        ChampionDetailComponent,
        FilterByTagPipe,
        SortListComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false
        }),
        AppRoutingModule,
        AgCharts,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        BrowserAnimationsModule
    ],
    providers: []

})
export class AppModule { }
