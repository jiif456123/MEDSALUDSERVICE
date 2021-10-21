import { PresentarHomeComponent } from './presentar-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: PresentarHomeComponent },
]

@NgModule({
  declarations: [PresentarHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PresentarHomeModule { }
