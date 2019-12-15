import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachFileService {

  private envUrl = environment.url_server + 'travel/file/v1/';

  constructor(private http: HttpClient) { }

  public uploadFile(idProgram: number, fileName: string, file: File): Observable<any> {
    const registertUrl = this.envUrl + 'upload';
    const fileRequest: FormData = new FormData();
    const prepareToReq = `${file.name}+${fileName}+${idProgram}`;
    fileRequest.append('file', file, prepareToReq);
    return this.http.post(registertUrl, fileRequest);
  }

}
