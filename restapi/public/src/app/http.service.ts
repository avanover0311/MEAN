import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
  };

	getTasks(){
  console.log("in the service.ts file")
    return this._http.get('/tasks')
 	};

  getNestedTask(task){
    return this._http.get('/tasks/${task._id}')
  }

  createTask(newTasks) {
    return this._http.post('/tasks', newTasks)
  };

  changeTask(id) {
    return this._http.get('/tasks/'+id)
  };

  updateTask(changeTask) {
    console.log(changeTask._id, "In service.ts")
    return this._http.put('/tasks', changeTask)
  };

  destroyTask(id) {
    console.log('at destroyTask in service.ts', id);
    return this._http.delete('/tasks/'+id)
  };

};
