import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit, OnChanges {

  @Input() characterId: string = '';

  imageToShow: any;
  isImageLoading: boolean = false;

  constructor(private _uploadService: UploadsService) {
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.characterId = changes['characterId'] ? changes['characterId'].currentValue : this.characterId;
    
    if (this.characterId != '' && !this.imageToShow)
      this.getImageFromService();
  }

  getImageFromService() {
    this.isImageLoading = true;
    this._uploadService.getFile(this.characterId)
    .subscribe({
      next: (data) => {
        this.createImageFromBlob(data);
          this.isImageLoading = false;
      },
      error: (error) => { 
        this.isImageLoading = false;
        console.log(error);}
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }
  }
}
