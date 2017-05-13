import {Component, OnInit} from '@angular/core';
import {Serie} from '../serie';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.scss']
})
export class CreateSerieComponent implements OnInit {
  private serie: Serie = {
    name: '',
    author: '',
    editorial: ''
  };

  constructor(private SeriesService: SeriesService) {
  }

  ngOnInit() {
  }

  validateSerieCreateForm() {
    console.log('Creando Serie');
    this.createSerie(this.serie);
  }

  createSerie(newSerie) {
    console.log('Calling Service');
    this.SeriesService.createSerie(newSerie)
      .subscribe(serie => this.serie = serie,
        error => console.log(error));
  }
}
