import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  
  PUBLIC_KEY = '635b10cf10648b90f56819de41a47db9';
  HASH = '7ef8663b9e5c817d57ab3efda2c61070';

  URL_API = `https://gateway.marvel.com/v1/public/stories?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
