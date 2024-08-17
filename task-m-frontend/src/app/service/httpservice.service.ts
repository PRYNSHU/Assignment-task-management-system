import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AppConstants } from 'src/app/AppConstants';
import { taskForm } from '../Model/taskModel';

@Injectable({
  providedIn: 'root'
})

export class HttpserviceService {

  constructor(private http: HttpClient) { }

  GetTasks():Observable<taskForm[]>{
    return this.http.get<taskForm[]>(AppConstants.API_URL + 'tasks')
  }

  GetTaskById(id: any):Observable<taskForm[]>{
    return this.http.get<taskForm[]>(AppConstants.API_URL + `tasks/${id}`)
  }

  DeleteTaskById(id: any):Observable<taskForm[]>{
    return this.http.delete<taskForm[]>(AppConstants.API_URL + `tasks/${id}`)
  }

  SaveTask(data:any){
    console.log('service ',data)
    return this.http.post(AppConstants.API_URL + 'tasks',data);
  }

  FilterTasks_P(data : any) {
    return this.http.get<taskForm[]>(AppConstants.API_URL + `tasks?priority=${data}`)
  }

  FilterTasks_S(data : any) {
    return this.http.get<taskForm[]>(AppConstants.API_URL + `tasks?completed=${data}`)
  }

}
