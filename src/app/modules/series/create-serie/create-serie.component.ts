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

  image: any = null;

  constructor(private SeriesService: SeriesService) {
  }

  ngOnInit() {
  }

  deleteImage() {
    this.image = null;
  }

  validateSerieCreateForm() {
    console.log('Creando Serie');
    const self = this;
    const formData = new FormData();
    for (let key in self.serie) {
      if(self.serie[key] !== undefined){
        formData.append(key, self.serie[key]);
      }
    }
    //formData.append('_csrf',)
    formData.append('imageFile', self.image.file, self.image.name);

    this.createSerie(formData);
  }

  createSerie(newSerie) {
    console.log('Calling Service');
    this.SeriesService.createSerie(newSerie)
      .subscribe(serie => this.serie = serie,
        error => console.log(error));
  }
}
