import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters/characters-list/characters-list.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AddCharacterComponent } from './components/characters/add-character/add-character.component';
import { EditCharacterComponent } from './components/characters/edit-character/edit-character.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DisconnectedPageComponent } from './components/disconnected-page/disconnected-page.component';
import { EnumSpacingPipe } from './pipes/enum-spacing.pipe';
import { AttributesComponent } from './components/characters/attributes/attributes.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TraitsComponent } from './components/characters/traits/traits.component';
import { PassionsComponent } from './components/characters/passions/passions.component';
import { SkillsComponent } from './components/characters/skills/skills.component';
import { ViewCharacterComponent } from './components/characters/view-character/view-character.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ConfirmationDialogComponent } from './components/modals/confirmation-dialog/confirmation-dialog.component'
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { UploadImageComponent } from './components/characters/upload-image/upload-image.component';
import { UploadDialogComponent } from './components/modals/upload-dialog/upload-dialog.component';
import { PortraitComponent } from './components/characters/portrait/portrait.component';
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './components/auth/user-profile/user-profile.component';

@NgModule({
  declarations: [
    GenderPipe,
    EnumSpacingPipe,

    AppComponent,
    CharactersListComponent,
    AddCharacterComponent,
    EditCharacterComponent,
    LandingPageComponent,
    DisconnectedPageComponent,
    AttributesComponent,
    NotFoundPageComponent,
    TraitsComponent,
    PassionsComponent,
    SkillsComponent,
    ViewCharacterComponent,
    ConfirmationDialogComponent,
    UploadImageComponent,
    UploadDialogComponent,
    PortraitComponent,

    UserProfileComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: '***REMOVED***',
      clientId: '***REMOVED***',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule, 
    AppRoutingModule, 
    
    FormsModule, 
    
    TabsModule,
    ModalModule,
    BsDropdownModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
