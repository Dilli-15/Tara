import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.component.html',
  styleUrls: ['./eventmodal.component.scss']
})

export class EventmodalComponent implements OnInit {
   
  constructor(private modal:NgbActiveModal) { }
  none:boolean=true;
  Attended:boolean=true;
  Organized:boolean=true;
  Delivered:boolean=true;
   roles:string[]=["Attended","Organized","Delivered"];
   eventtype:string[]=["Guest Lecture","Conference","Seminar","Symposia","Training Programme","Workshop","Orientation Programme","Refresher Programme","Short Term Course","FDP","MOOC/Online Courses"];
   orgtype:string[]=["Industry","Academic","Research Center/Lab"]
  ngOnInit(): void {
  }
   
  onchange(data:string){
    console.log(data);
  if(data===""){
    this.none=true;
    this.Attended=true;
    this.Delivered=true;
    this.Organized=true;
  }
  if(data==="Attended"){
    this.none=false;
    this.Attended=false;
    this.Delivered=true;
    this.Organized=true;
  }
  if(data==="Organized"){
    this.none=false;
    this.Attended=true;
    this.Delivered=true;
    this.Organized=false;
  }
  if(data==="Delivered"){
    this.none=false;
    this.Attended=true;
    this.Delivered=false;
    this.Organized=true;
  }
  }
  closemodal(){
    this.modal.close();
  }
}
