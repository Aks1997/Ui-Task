import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  data: Array<Object>=[];
  dataLength: Number=100;

  constructor() { }

  ngOnInit() {
    this.createMockData();
  }

  createMockData(){
    for(let i=0;i <this.dataLength; i++){
      let obj= {
        firstName: this.makeRandomString(),
        lastName: this.makeRandomString(),
        age: Math.floor(Math.random()*100)
      }
      this.data.push(obj);
    }
  }

  makeRandomString() {
    length= 5;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
