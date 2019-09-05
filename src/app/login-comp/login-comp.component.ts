import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent implements OnInit {

  angForm: FormGroup;
  responseObj: any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: [''],
      password: [''],
      reasonOfRequest: ['']
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.httpClient.post('http://localhost:8080/users/sign-up', form).subscribe((res: any) => {
        console.log(res);
        this.responseObj = res;
        this.completeLoginForJWTToken(form);
      },
      error => {
        console.log(error);
      });
  }

  completeLoginForJWTToken(form: NgForm) {
  }

  ngOnInit() {
  }

}
