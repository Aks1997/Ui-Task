import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskOneComponent } from '../task-one/task-one.component';
import { TaskTwoComponent } from '../task-two/task-two.component';
import { TasksComponent } from '../tasks/tasks.component';

const routes: Routes = [
  {
    path: '', 
    component: TasksComponent 
  },
  {
    path: 'one', 
    component: TaskOneComponent 
  },
  {
    path: 'two',
    component: TaskTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
