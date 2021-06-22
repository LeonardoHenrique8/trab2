import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  PUBLIC_KEY = '635b10cf10648b90f56819de41a47db9';
  HASH = '7ef8663b9e5c817d57ab3efda2c61070';

  URL_API = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllComics(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
