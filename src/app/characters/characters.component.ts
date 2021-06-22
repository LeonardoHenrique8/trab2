import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  TodosPersonagens: Observable<any>

  constructor(private charactersService: CharactersApiService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.TodosPersonagens = this.charactersService.getAllCharacters()
    console.log(this.TodosPersonagens)
  }

}
