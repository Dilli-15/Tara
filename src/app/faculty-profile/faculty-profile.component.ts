import { Component, OnInit } from '@angular/core';
import {ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

interface Experience{
 company:string,
 role:string,
 from:string,
 to:string 
}
@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent implements OnInit {
  @ViewChild('content', { static: true }) 
  exp:Experience[]=[];
  edit:boolean=false;

  constructor(private activeModal: NgbActiveModal) {
   }

  ngOnInit(): void {
  }
  addele(data:any,add:NgForm){
   let temp={
        company:data.company,
        role:data.role,
        from:data.from,
        to:data.to
    };
    this.exp.push(temp);
    add.resetForm();
  }
  editp(){
    this.edit=true;
  }
  closemodal(){
    this.activeModal.close("Closed");
  }

}
