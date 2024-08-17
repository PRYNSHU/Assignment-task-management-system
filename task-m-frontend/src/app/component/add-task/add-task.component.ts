import { taskForm } from 'src/app/Model/taskModel';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {

  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  
  // task form template
  taskForm = this.buildr.group({
    title: this.buildr.control(''),
    completed: this.buildr.control(false),
    priority: this.buildr.control('High'),
    dueDate: this.buildr.control('')
  });
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddTaskComponent>, 
    private buildr: FormBuilder,
    private service: HttpserviceService
  ) { }

  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setEditData(this.inputdata.data)
    }
  }

  // edit the data
  setEditData(data: any) {
    this.service.GetTaskById(data).subscribe(item => {
      this.editdata = item;
      this.taskForm.setValue({
        title:this.editdata.title,
        completed:this.editdata.completed,
        priority:this.editdata.priority,
        dueDate:this.editdata.dueDate
      })
    })
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  // add task
  SubmitTask() {
    console.log(this.taskForm.value)
    this.service.SaveTask(this.taskForm.value).subscribe(data => {
      this.closepopup();
    });
  }

}
