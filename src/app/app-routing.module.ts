import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinechartComponent } from './components/linechart/linechart.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'line-chart',
    component: LinechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
