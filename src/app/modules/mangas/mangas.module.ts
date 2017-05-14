import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ListMangasComponent } from './list-mangas/list-mangas.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';
import {MangasService} from './mangas.service';
import {SeriesService} from '../series/series.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'mangas/create', component: CreateMangaComponent},
      {path: 'mangas', component: ListMangasComponent}
    ])
  ],
  declarations: [ListMangasComponent, CreateMangaComponent],
  providers: [MangasService, SeriesService]
})
export class MangasModule { }
