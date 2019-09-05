import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CameraStatus} from '../Models/CameraStatus';


@Injectable()
export class UserService {
  private serviceUrl = 'http://localhost:8080/request/list';

  constructor(private http: HttpClient) {
  }

  // getUser(): BehaviorSubject<CameraStatus[]> {
  //   console.log('making the call to the db');
  //   this.http.get<CameraStatus[]>(this.serviceUrl).subscribe((res: any) => {
  //       console.log(res);
  //       this.myData = res;
  //       console.log(this.myData);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  //   return this.myData;
  // }
  getUser() {
    console.log('making the call to the db');
    return this.http.get<CameraStatus[]>(this.serviceUrl);
  }

}
