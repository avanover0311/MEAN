import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task: Object;
  tasks: Object[];
  task_to_edit: Object;
  newTasks: any;
  changeTask: Object;
  selectedTask: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    console.log("**********************")
  	this.tasks = [];
    this.task = {'task': " ", 'description': " "};
    this.showTasks();
  }

  showTasks(){
  	console.log('here I am');
    let tasksObservable = this._httpService.getTasks();
    tasksObservable.subscribe((data: any) => {
      console.log(data);
      this.tasks = data['tasks'];
    });
  }

  onSubmit(){
    console.log('at onSubmit', this.newTasks);
    let newTasksObservable = this._httpService.createTask(this.newTasks);
    newTasksObservable.subscribe((data: any) => {
      this.newTasks = data['task'];
    })
  }

  displayEdit(id: any) {
    console.log('displayEdit running', id);
    let editObservable = this._httpService.changeTask(id);
    editObservable.subscribe((data: any) => {
      this.task_to_edit = data['task'];
      console.log(this.task_to_edit);
    });
  }

  onSubmitEdit() {
    console.log('at onSubmitEdit method');
    let submitEditObservable = this._httpService.updateTask(this.task_to_edit);
    submitEditObservable.subscribe((data: any) => {
     this.showTasks();
    })
  }

  deleteTask(id: any) {
    console.log('at deleteTask in component.ts', id);
    let deleteObservable = this._httpService.destroyTask(id);
    deleteObservable.subscribe((data: any) => {
      this.task_to_edit = data['task'];
      this.showTasks();
    })
  }
  taskToShow(task) {
    console.log('at the task to show component.ts', task);
    let showObservable = this._httpService.getNestedTask(task);
    showObservable.subscribe((data:any) => {
      this.selectedTask=data['task'];
      console.log(this.selectedTask)
    })
  }

}
