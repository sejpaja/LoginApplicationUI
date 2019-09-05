import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CameraStatus} from '../Models/CameraStatus';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.scss']
})
export class SignupCompComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  fetchList(): Observable<CameraStatus[]> {
    return this.httpClient.get<CameraStatus[]>('http://localhost:8080/api/edge/reports/list');
  }

  ngOnInit() {
  }

}
