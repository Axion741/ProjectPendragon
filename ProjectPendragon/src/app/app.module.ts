import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters/characters-list/characters-list.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,

    GenderPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
