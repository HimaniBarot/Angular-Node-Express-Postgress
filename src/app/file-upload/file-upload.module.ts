import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharedModule } from '../shared/shared.module';
import { FileUploadService } from './services/file-upload.service';


@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ],
  providers: [FileUploadService]
})
export class FileUploadModule { }
