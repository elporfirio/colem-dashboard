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
  private image: any;

  constructor(private MangasService: MangasService, private SeriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
    this.image = null;
  }

  deleteImage() {
    this.image = null;
  }

  getSeries(){
    this.SeriesService.getSeries()
      .subscribe(series => this.series = series,
      error => console.log(error));
  }

  validateMangaCreateForm() {
    console.log('Creando Manga');
    const self = this;
    const formData = new FormData();
    for (let key in self.manga) {
      if(self.manga[key] !== undefined){
        formData.append(key, self.manga[key]);
      }
    }
    formData.append('imageFile', self.image.file, self.image.name);
    this.createManga(formData);
  }

  createManga(newManga) {
    console.log('Calling Service');
    this.MangasService.createManga(newManga)
      .subscribe(manga => this.manga = manga,
        error => console.log(error));
  }
}
