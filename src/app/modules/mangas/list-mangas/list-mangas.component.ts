import { Component, OnInit } from '@angular/core';
import {MangasService} from '../mangas.service';
import {Router} from '@angular/router';
import {Manga} from '../manga';

@Component({
  selector: 'app-list-mangas',
  templateUrl: './list-mangas.component.html',
  styleUrls: ['./list-mangas.component.scss']
})
export class ListMangasComponent implements OnInit {
  private mangas: Manga[];

  constructor(private MangasService: MangasService, private router: Router) { }

  ngOnInit() {
    this.MangasService.getMangas()
      .subscribe(mangas => this.mangas = mangas,
        error => console.log(error));
  }

  goTo(param) {
    if (param) {
      this.router.navigate([`mangas/${param}`]);
    }
  }
}
