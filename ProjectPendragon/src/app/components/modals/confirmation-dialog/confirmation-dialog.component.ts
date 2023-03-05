import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'
import { Subject } from 'rxjs';
import { ConfirmationDialogOptions } from 'src/app/models/dialogs/confirmation-dialog-options';
@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  public onClose: Subject<boolean>;

  options: ConfirmationDialogOptions;

  constructor(public modalRef: BsModalRef){
    this.options = modalRef.content?.options;
    this.onClose = new Subject();
  };

  hide(value: boolean) {
    this.onClose.next(value);
    this.modalRef.hide();
  }

}
