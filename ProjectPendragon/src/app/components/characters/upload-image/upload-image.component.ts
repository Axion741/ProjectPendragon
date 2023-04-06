import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  progress: number = 0;
  message: string = '';
  
  @Input() id: string = '';

  /**
   *
   */
  constructor(private http: HttpClient, private uploadsService: UploadsService) {
    
  }

  ngOnInit(): void {
    
  }

  uploadFile(files: FileList | null) {
    if (files == null || files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.uploadsService.uploadFile(this.id, formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress && event.total)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if(event.type === HttpEventType.UploadProgress && !event.total)
          this.progress = 0;
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          //this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err); 
        this.message = "Upload Failed: " + err.error; 
        this.progress = -1; 
      }
    });
  }
}
