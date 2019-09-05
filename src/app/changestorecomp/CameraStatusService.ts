import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {CameraStatus} from '../Models/CameraStatus';

@Injectable()
export class CameraStatusService {
  private serviceUrl = 'http://localhost:8080/request/listStore';
  datasource;

  constructor(private http: HttpClient) {
  }

  getListOfCameras(form: NgForm) {
    console.log('making the call to the db');
    return this.http.post<CameraStatus[]>(this.serviceUrl, form);
  }
}
