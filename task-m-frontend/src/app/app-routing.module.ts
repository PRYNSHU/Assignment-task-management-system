import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TaskHomeComponent } from './component/task-home/task-home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'task-list',component: TaskHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
