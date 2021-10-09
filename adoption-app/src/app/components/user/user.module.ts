import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
