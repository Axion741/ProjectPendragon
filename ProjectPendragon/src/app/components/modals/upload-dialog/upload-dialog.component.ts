import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent {
  public onClose: Subject<boolean>;

  id: string;

  constructor(public modalRef: BsModalRef){
    this.id = modalRef.content?.id;
    this.onClose = new Subject();
  };

  hide(value: boolean) {
    this.onClose.next(value);
    this.modalRef.hide();
  }
}
