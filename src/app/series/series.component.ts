import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from './serie/shared/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  TodasSeries: Observable<any>

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries() {
    this.TodasSeries = this.seriesService.getAllSeries()
    console.log(this.TodasSeries)
  }

}
