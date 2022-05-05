import { Component, OnInit } from '@angular/core';
import {Serie} from './serie';
import { SeriesService } from './series.service';
@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService : SeriesService) { }
  series : Array<Serie> = [];
  promedio : number = 0;
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      console.log(series.length);
      console.log(this.series.length);
      this.getPromedioSeasons();
    });
  }
  getPromedioSeasons() {
    let nseries = 0;
    let temporadas = 0;
    console.log(this.series.length);
    console.log(nseries);
    for (let seresita of this.series) {
      nseries += 1;
      temporadas += seresita.seasons;
      console.log(nseries);
      console.log(temporadas);


    }
    this.promedio = temporadas/nseries;
    let btpromedio = document.getElementById("total")!;
    btpromedio.innerText = "Promedio de temporadas " + this.promedio.toString();
  }
  ngOnInit() {
    this.getSeries();


  }

}
