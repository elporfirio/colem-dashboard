import { Component, OnInit } from '@angular/core';
import {Manga} from '../manga';
import {MangasService} from '../mangas.service';
import {SeriesService} from '../../series/series.service';
import {Serie} from '../../series/serie';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.scss']
})
export class CreateMangaComponent implements OnInit {
  private manga: Manga = {
    title: '',
    publishedAt: '',
    volume: 0,
    price: 0,
    isbn: '',
    serie_id: 0
  };

  private series: Serie[];

  constructor(private MangasService: MangasService, private SeriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(){
    this.SeriesService.getSeries()
      .subscribe(series => this.series = series,
      error => console.log(error));
  }

  validateMangaCreateForm() {
    console.log('Creando Serie');
    this.createManga(this.manga);
  }

  createManga(newManga) {
    console.log('Calling Service');
    this.MangasService.createManga(newManga)
      .subscribe(manga => this.manga = manga,
        error => console.log(error));
  }
}
