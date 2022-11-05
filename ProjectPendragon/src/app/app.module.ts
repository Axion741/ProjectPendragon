import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters/characters-list/characters-list.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AddCharacterComponent } from './components/characters/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { EditCharacterComponent } from './components/characters/edit-character/edit-character.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DisconnectedPageComponent } from './components/disconnected-page/disconnected-page.component';
import { EnumSpacingPipe } from './pipes/enum-spacing.pipe';
import { AttributesComponent } from './components/characters/attributes/attributes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,

    GenderPipe,
    EnumSpacingPipe,
    
    AddCharacterComponent,
    EditCharacterComponent,
    LandingPageComponent,
    DisconnectedPageComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
