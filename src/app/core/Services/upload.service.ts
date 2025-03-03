import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/Environment';
import {ResponseApi} from '../Model/ApiResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {
  }

  private urlApi: string = environment.endpoint;

  upload(image: File): Observable<ResponseApi> {
    const formData= new FormData();
    formData.append('image', image);
    return this.http.post<ResponseApi>(`${this.urlApi}upload`, formData,{
      headers:{
        contentType: "multipart/form-data"
      }
    })
  }


}
