import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from './comic/shared/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  TodasComics: Observable<any>

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.getComics()
  }
  getComics() {
    this.TodasComics = this.comicsService.getAllComics()
    console.log(this.TodasComics)
  }

}
