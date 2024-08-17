import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddTaskComponent } from '../add-task/add-task.component';
import { taskForm } from 'src/app/Model/taskModel';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})

export class TaskHomeComponent {
  
  taskList !: taskForm[];
  selection = new SelectionModel<taskForm>(true, [])
  dataSource: any;
  displayedColumns: string[] = ["Status", "Title", "Priority", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: HttpserviceService, private dialog: MatDialog) {
    this.loadTasks();
  }

  // load all tasks
  loadTasks() {
    this.service.GetTasks().subscribe(res => {
      this.taskList = res;
      this.dataSource = new MatTableDataSource<taskForm>(this.taskList)
      this.dataSource.paginator = this.paginatior
      this.dataSource.sort = this.sort
    })
  }

  // filter according to priority
  FilterPriority(data: Event) {
    this.service.FilterTasks_P(data).subscribe(res => {
      this.taskList = res;
      this.dataSource = new MatTableDataSource<taskForm>(this.taskList)
      this.dataSource.paginator = this.paginatior
      this.dataSource.sort = this.sort
    })

  }

  // filter according to status
  FilterStatus(data: Event) {
    this.service.FilterTasks_S(data).subscribe(res => {
      this.taskList = res;
      this.dataSource = new MatTableDataSource<taskForm>(this.taskList)
      this.dataSource.paginator = this.paginatior
      this.dataSource.sort = this.sort
    })

  }

  // To add task
  addTask(){
    this.Openpopup(0, 0, 'Add Task',AddTaskComponent);
  }
  
  // edit task
  editTask(taskId: any) {
    this.Openpopup(taskId, 1, 'Edit Task',AddTaskComponent);
  }

  // delete task
  deleteTask(taskId: any) {
    this.service.DeleteTaskById(taskId).subscribe(res => {
      this.loadTasks()
    })
  }
  
  // open add and edit task as popup
  Openpopup(data: any, code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      data: {
        title: title,
        code: code,
        data: data
      }
    });
    _popup.afterClosed().subscribe(item => {
      console.log(item)
      this.loadTasks()
    })
  }

}
