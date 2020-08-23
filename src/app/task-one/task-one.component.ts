import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  showMessage: boolean;

  constructor() { 
    this.showMessage=false;
  }

  ngOnInit() {
  }

  clicked(){
    this.showMessage=true;
    setTimeout(()=>{
      this.showMessage=false;
    }, 2000);
  }

}
