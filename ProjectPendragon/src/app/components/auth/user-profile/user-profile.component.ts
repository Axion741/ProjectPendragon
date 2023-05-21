import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'user-profile',
  styleUrls: ['./user-profile.component.css'],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

}

