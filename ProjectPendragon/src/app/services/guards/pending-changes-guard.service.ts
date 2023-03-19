import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import {  firstValueFrom } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/components/modals/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogOptions } from 'src/app/models/dialogs/confirmation-dialog-options';

@Injectable({
  providedIn: 'root'
})
export class PendingChangesGuardService {
  _modalRef?: BsModalRef;
  
  constructor(private _modalService: BsModalService) { }

  public async canDeactivate(pendingChanges: boolean): Promise<boolean> {
    if (!pendingChanges) {
      return true;
    }

    var options = new ConfirmationDialogOptions();
    options.title = "Warning";
    options.message = `You have unsaved changes. Are you sure you want to leave this page?`;
    options.confirmText = 'Leave';
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

    return firstValueFrom(this._modalRef.content.onClose);
  }
}
