import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
