import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name:'';
  newId;
  newName;
  newAge;
  listItem = ['Home','About','Contact','Project'];
  arrObj = [
    {id:1,name:"Hoang",age:26},
    {id:1,name:"Nam",age:20},
    {id:1,name:"Linh",age:16},
    {id:1,name:"Toan",age:24},
    {id:1,name:"Loi",age:22},  
  ];
  constructor() { }

  ngOnInit() {
  }
  addItem(){
    var newObj={
      id:this.newId,
      name:this.newName,
      age:this.newAge
    }
    this.arrObj.unshift(newObj);
    this.newId='';
    this.newAge='';
    this.newName='';
  }
}
