import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PrimeNgModule
  ],
  exports: [
    AngularMaterialModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
