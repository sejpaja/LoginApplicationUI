import {Component, OnInit} from '@angular/core';
import {UserService} from './UserService';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-camera-status-comp',
  templateUrl: './camera-status-comp.component.html',
  styleUrls: ['./camera-status-comp.component.scss']
})
export class CameraStatusCompComponent implements OnInit {
  dataSource;
  displayedColumns = ['sensorId', 'facilityId', 'divisionId', 'insertTs', 'camstatus'];
  public filter: string;
  displayNoSignUp: boolean;

  constructor(private userService: UserService) {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showCard() {
    if (this.displayNoSignUp === true) {
      this.displayNoSignUp = false;
    }
    if (this.displayNoSignUp === false) {
      this.displayNoSignUp = true;
    }
  }

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
      console.log('lo mein aaa agaya' + res);
      this.dataSource = new MatTableDataSource(res);
    });
    this.displayNoSignUp = false;
  }
}
