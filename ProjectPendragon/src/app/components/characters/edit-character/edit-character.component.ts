import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { UpdateCharacterRequest } from 'src/app/models/requests/update-character-request.model';
import { Character } from 'src/app/models/character/character.model';
import { EClass } from 'src/app/models/character/e-class';
import { ECulture } from 'src/app/models/character/e-culture';
import { EGender } from 'src/app/models/character/e-gender';
import { EReligion } from 'src/app/models/character/e-religion';
import { Attributes } from 'src/app/models/character/attributes';
import { Passion } from 'src/app/models/character/passion';
import { Skills } from 'src/app/models/character/skills';
import { Traits } from 'src/app/models/character/traits';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '../../modals/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogOptions } from 'src/app/models/dialogs/confirmation-dialog-options';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  @ViewChild('form') public form: NgForm = new NgForm([], []);
  _modalRef?: BsModalRef;

  EGender = EGender;
  ECulture = ECulture;
  EReligion = EReligion;
  EClass = EClass;
  
  character: Character = {} as Character;
  allCharacterList: Character[] = [];

  constructor(private _router: Router, private _charactersService: CharactersService, private _modalService: BsModalService) { }

  ngOnInit(): void {    
    this.character = this._charactersService.selectedCharacter;
    this.allCharacterList = this._charactersService.allCharacterList;
  }

  updateCharacter() {
    var request = new UpdateCharacterRequest(this.character);

    this._charactersService.updateCharacter(this.character.id, request)
      .subscribe({
        next: (response) => {
          this.form.form.markAsPristine();
          this._router.navigate(['/characters', 'view', this.character.id]);
        },
        error: (error) => console.log("Update Character Error", error)
      })
  }

  deleteCharacter() {
    var options = new ConfirmationDialogOptions();
    options.title = "Delete Character";
    options.message = `Are you sure you want to delete ${this.character.name}?`;
    options.confirmText = 'Delete';
    options.cancelText = 'Cancel';
    options.confirmDanger = true;
    options.cancelDanger = false;

    const initialState: ModalOptions = {
      initialState: {
        options: options
      },
      backdrop: 'static',
      keyboard: false
    }

    this._modalRef = this._modalService.show(ConfirmationDialogComponent, initialState);

    this._modalRef.content.onClose.subscribe((value: boolean) => {
      //console.log("KB - onClose", value);

      if (value == false)
        return;

      if (value == true) {
        this._charactersService.deleteCharacter(this.character.id)
          .subscribe({
            next: (response) => {
              this._router.navigate(['characters']);
            },
            error: (error) => console.log("Delete Character Error", error)
          })
      }
    })
    
  }

    //Return 0 to stop keyvalue pipe sorting
    returnZero(): number { 
      return 0;
    }
  
    onAttributesChange(attributes: Attributes): void {
      this.character.attributes = attributes;
    }
  
    onTraitsChange(traits: Traits): void {
      this.character.traits = traits;
    }
  
    onPassionsChange(passions: Passion[]): void {
      this.character.passions = passions;
    }
  
    onSkillsChange(skills: Skills): void {
      this.character.skills = skills;
    }

    routeToViewCharacter() {
      this._router.navigate(['/characters', 'view', this.character.id]);
    }
}