import {Component, OnInit} from '@angular/core';
import {Serie} from '../serie';
import {SeriesService} from '../series.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss']
})

export class ListSeriesComponent implements OnInit {
  private series: Serie[];
  private endPoint: string;

  constructor(private SeriesService: SeriesService, private router: Router) {
    this.endPoint = environment.host + environment.api;
  }

  ngOnInit() {
    this.SeriesService.getSeries()
      .subscribe(series => this.series = series,
        error => console.log(error));
  }

  goTo(param) {
    if (param) {
      this.router.navigate([`series/${param}`]);
    }
  }
}
