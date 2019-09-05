import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {CameraStatusService} from './CameraStatusService';


@Component({
  selector: 'app-changestorecomp',
  templateUrl: './changestorecomp.component.html',
  styleUrls: ['./changestorecomp.component.scss']
})
export class ChangestorecompComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private service: CameraStatusService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      facilityId: [''],
      divisionId: ['']
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.service.getListOfCameras(form).subscribe(res => {
      console.log('The response from the POST call' + res);
    });
  }

  ngOnInit() {
  }

}
