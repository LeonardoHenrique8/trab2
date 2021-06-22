import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
