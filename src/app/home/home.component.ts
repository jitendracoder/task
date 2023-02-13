import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: any;
  designation: any;
  age: any;
  dos: any;
  doe: any;
  nameup: any;
  designationup: any;
  ageup: any;
  dosup: any;
  doeup: any;
  nameValue: any = '';
  designationValue: any ='';
  ageValue: any = '';
  dosValue: any = '';
  doeValue: any = '';
  currentData: any;
  box = false;
  employeeList = [
    {name: 'Kumar Amit', designation: 'Manager', age: 33, dos: '2015-05-01', doe: '2018-02-25',  jobstatus: false},
    {name: 'Ankur Taygi', designation: 'Tech Lead', age: 38, dos: '2015-05-01', doe: '2020-05-01', jobstatus: true},
    {name: 'Saurav Mishra', designation: 'Software Developer', age: 40, dos: '2015-05-01', doe: '2018-05-01',jobstatus: false},
    {name: 'Ravi Yadav', designation: 'Quality Analysis', age: 30, dos: '2015-05-01', doe: '2018-07-25', jobstatus: true},
    {name: 'Manoj Singh', designation: 'UI Designer', age: 35, dos: '2015-05-01', doe: '2018-09-25', jobstatus: false}
  ]

  filterData(){
    this.nameValue = this.name;
    this.designationValue = this.designation;
    this.ageValue = this.age
    this.dosValue = this.dos;
    this.doeValue = this.doe;
  }

  reset(){
    this.name = '',
    this.designation = '',
    this.age = '',
    this.dos = '',
    this.doe = '',
    this.nameValue = '';
    this.designationValue = '';
    this.ageValue = '';
    this.dosValue = '';
    this.doeValue = '';
  }

  AddRecords(){
    let  empObj:any={
      name : this.name,
      designation: this.designation,
      age: this.age,
      dos: this.dos,
      doe: this.doe
    }
    this.employeeList.push(empObj);
  }

  updateData(index: any, data: any){
    if(data){
      this.currentData = data;
      this.currentData.temId = index;
    }
  }


  saveData(){
    let  empObjUpdate:any={
      name : this.nameup,
      designation: this.designationup,
      age: this.ageup,
      dos: this.dosup,
      doe: this.doeup
    }
    const newObj = Object.keys(empObjUpdate)
    newObj.map(res=>{
      if(empObjUpdate[res] == undefined){
        empObjUpdate[res] = this.currentData[res]
      }
    })
    this.employeeList.splice(this.currentData.temId, 1, empObjUpdate)
  }

  deleteData(index: any){
    if(this.employeeList.length > 1){
      this.employeeList.splice(index, 1)
    }
  }

  closeBox(){
    this.currentData = null
  }
}
