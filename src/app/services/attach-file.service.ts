import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttachFileService {

  private envUrl = 'http://192.168.1.7:8080/travel/file/v1/';

  constructor(private http: HttpClient) { }

  public uploadFile(idProgram: number, fileName: string, file: File): Observable<any> {
    const registertUrl = this.envUrl + 'upload';
    const fileRequest: FormData = new FormData();
    const prepareToReq = `${file.name}+${fileName}+${idProgram}`;
    fileRequest.append('file', file, prepareToReq);
    return this.http.post(registertUrl, fileRequest);
  }

}
