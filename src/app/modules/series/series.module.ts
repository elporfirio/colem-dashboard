import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSerieComponent } from './create-serie/create-serie.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SeriesService} from './series.service';
import { ListSeriesComponent } from './list-series/list-series.component';
import {ImageUploaderModule} from '../../common/image-uploader/image-uploader.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ImageUploaderModule,
    RouterModule.forChild([
      {path: 'series/create', component: CreateSerieComponent},
      {path: 'series', component: ListSeriesComponent}
    ])
  ],
  declarations: [CreateSerieComponent, ListSeriesComponent],
  providers: [
    SeriesService
  ]
})
export class SeriesModule { }
