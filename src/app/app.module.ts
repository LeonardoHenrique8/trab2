import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic/comic.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './series/serie/serie.component';
import { StoriesComponent } from './stories/stories.component';
import { StorieComponent } from './stories/storie/storie.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card' ;
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    ComicsComponent,
    ComicComponent,
    EventsComponent,
    EventComponent,
    SeriesComponent,
    SerieComponent,
    StoriesComponent,
    StorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
