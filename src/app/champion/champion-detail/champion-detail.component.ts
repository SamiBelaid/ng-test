import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Champion } from '../champion';
import { DataService } from '../../data.service';
import { Tag } from '../tag.enum';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrl: './champion-detail.component.css'
})
export class ChampionDetailComponent implements OnInit {

  public selectedChampionId: number | null = null;
  public selectedChampion: Champion | undefined;
  public championTags: Tag[] = Object.values(Tag);
  public championForm: FormGroup;
  public isEditMode = false;
  public newId: number = 0;


  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private fb: FormBuilder) {
    this.championForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      tags: [[]]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.selectedChampionId = Number(id);
        this.getChampionById(this.selectedChampionId);
      } else {
        this.isEditMode = false;
      }
    });
  }

  public getChampionById(id: number): void {
    this.dataService.getChampionById(id).subscribe(champion => {
      this.selectedChampion = champion;
      if (this.selectedChampion) {
        this.populateForm(this.selectedChampion);
      }
    });
  }

  public deleteChampion(id: number): void {
    this.dataService.deleteChampion(id).subscribe({
      next: () => {
        this.router.navigate(['/champions']);
      },
      error: (err) => console.error('Error deleting champion:', err)
    });
  };

  public updateChampion(champion: Champion): void {
    this.dataService.updateChampion(champion).subscribe({
      next: () => {
        this.router.navigate(['/champions']);
      },
      error: (err) => console.error('Error updating champion:', err)
    });
  };

  public addChampion(champion: Champion): void {
    this.dataService.addChampion(champion).subscribe({
      next: () => {
        this.router.navigate(['/champions']);
      },
      error: (err) => console.error('Error adding champion:', err)
    });
  }

  public getChampionIds(): void {
    this.dataService.getChampionIds().subscribe(ids => {
      console.log('Champion IDs:', ids);
      this.newId = Math.max(...ids) + 1;
      console.log('New ID:', this.newId);
    });
  }

  onDelete() {
    if (this.selectedChampion && confirm('Are you sure you want to delete this champion?')) {
      this.deleteChampion(this.selectedChampion.id);
    };
  };

  onSubmit() {
    if (this.championForm.valid) {
      if (this.isEditMode && this.selectedChampion) {
        const updatedChampion: Champion = {
          ...this.selectedChampion,
          ...this.championForm.value
        };
        this.updateChampion(updatedChampion);
      } else {
        const newChampion: Champion = {
          id: this.generateChampionId(),
          ...this.championForm.value
        };
        this.addChampion(newChampion);
      }
    }
  }

  populateForm(champion: Champion) {
    this.championForm.patchValue({
      name: champion.name,
      title: champion.title,
      tags: champion.tags
    });
  }

  isTagSelected(tag: string): boolean {
    return this.championForm.value.tags.includes(tag);
  }

  onTagChange(tag: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const tagsArray: string[] = this.championForm.value.tags;
    if (checked) {
      tagsArray.push(tag);
    } else {
      const index = tagsArray.indexOf(tag);
      if (index > -1) {
        tagsArray.splice(index, 1);
      }
    }
    this.championForm.controls['tags'].setValue(tagsArray);
  }

  private generateChampionId(): number {
    this.getChampionIds();
    return this.newId;
  }

  OnCancel(): void{
    this.router.navigate(['/champions']);
  }










}
