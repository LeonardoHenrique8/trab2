import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoriesService } from './storie/shared/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  TodosStories: Observable<any>

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.getStories()
  }

  getStories() {
    this.TodosStories = this.storiesService.getAllStories()
    console.log(this.TodosStories)
  }
}
