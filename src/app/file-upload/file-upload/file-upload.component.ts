import { Component, OnInit } from '@angular/core';
import { MyFile } from '../models/file-upload.model';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent implements OnInit {

  imagePreview!: string;
  private _file!: MyFile;
  private _fileToUpload!: File;

  constructor(private _fileUploadService: FileUploadService) { 
    this._file = {} as MyFile;
  }

  ngOnInit(): void {
  }

  public onFileChange(event: any){
    this._file = (event.target as any).files[0];
  }

  public onFileUpload(){
    const file = this._file;
    // file.name = this._fileToUpload.name;
    console.log("File", file);
    file.name = this._fileToUpload.name;
    console.log("File To Upload", this._fileToUpload);
    
    this._fileUploadService.addFile(file).subscribe((res) => {
      console.log("Response",res);
      // const reader = new FileReader();
      // reader.readAsDataURL(file as any);
      // reader.onload = () => {
      //   this.imagePreview = reader.result as string;
      //   console.log("imagePreview", this.imagePreview); 
      // };
    });
  }

}
