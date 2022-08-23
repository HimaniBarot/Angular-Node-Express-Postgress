import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyFile } from '../models/file-upload.model';

@Injectable()
export class FileUploadService {

  private _apiLink: string;

  constructor(private _http: HttpClient) { 
    this._apiLink = "http://localhost:3000";
  }

  public addFile(file: MyFile): Observable<MyFile> {
    console.log(file);
    
    return this._http.post<MyFile>(`${this._apiLink}/file`, file);
  }
}
