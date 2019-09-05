import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {LoginCompComponent} from './login-comp/login-comp.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupCompComponent} from './signup-comp/signup-comp.component';
import {CameraStatusCompComponent} from './camera-status-comp/camera-status-comp.component';
import {UserService} from './camera-status-comp/UserService';
import {ChangestorecompComponent} from './changestorecomp/changestorecomp.component';
import {CameraStatusService} from './changestorecomp/CameraStatusService';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    SignupCompComponent,
    CameraStatusCompComponent,
    ChangestorecompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatSortModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatListModule,
  ],
  providers: [UserService, CameraStatusService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
