import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule { }
