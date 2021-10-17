import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageAnimalComponent } from './admin-dashboard/manage-animal/manage-animal.component';
import { ManageUserComponent } from './admin-dashboard/manage-user/manage-user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { 
    path: 'user-dashboard', component: UserDashboardComponent
  },
  { 
    path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'manage-animals', pathMatch: 'full' },
      { path: 'manage-animals', component: ManageAnimalComponent },
      { path: 'manage-users', component: ManageUserComponent }
    ]
  }
];


@NgModule({
  declarations: [
    UserDashboardComponent,
    AdminDashboardComponent,
    ManageAnimalComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserDashboardComponent,
    AdminDashboardComponent,
    ManageAnimalComponent,
    ManageUserComponent
  ]
})
export class UserModule { }
