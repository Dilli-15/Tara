import { Component, OnInit } from '@angular/core';
import {ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../sharedservice.service';
 

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
  image:any;
  exp:any;
  edit:boolean=false;
  data:any={name:" ",
  phonenumber:" ",
  school: "",
  position: "",
  personalEmail: "",
  address1: "",
  address2: "",
  city: "",
  postalCode: "",
  state: "",
  country: "",
  image:" "
  };
  fimg:any="";
  imghid:boolean=false;
  photoUrl: any=" ";
  constructor(private sanitizer: DomSanitizer,private activeModal: NgbActiveModal,private shared:SharedserviceService, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getfacbid();
    this.getexperience();
    
    console.log(this.fimg);
    if(this.photoUrl===" "){
      this.imghid=false;
    }
    else{
      this.imghid=true;
    }
  }
  
  onselectimg(event:any){
    if(event.target.files.length>0){
      let file=event.target.files[0];
      this.image=file;
    }

  }
  addele(data:any,add:NgForm){
    
   let temp={
        uid:localStorage.getItem("currentuser"),
        registerId:data.registerId,
        company:data.company,
        role:data.role,
        from:data.from,
        to:data.to
    };
    this.exp.push(temp);
    this.shared.addexp(temp).subscribe(res=>{

    })
    add.resetForm();
  }
  getexperience(){
    this.shared.getexp(localStorage.getItem("currentuser")).subscribe(res=>{
      this.exp=res;
    })
  }
  editp(){
    this.edit=true;
  }
  closemodal(){
    this.activeModal.close("Closed");
  }
  getfacbid(){
    this.shared.getfacbid(localStorage.getItem("currentuser")).subscribe(res=>{
      this.data=res;
      this.fimg=res.image;
      this.photoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(res.image);
      if(this.photoUrl.changingThisBreaksApplicationSecurity.trim()===""){
        this.imghid=true;
      }
      else{
        this.imghid=false;
      }
    });
  
    this.getexperience();
  }
  editfac(data:any){
    let dat={
            name:data.name,
            phonenumber:data.phone,
            school:this.data.school,
            position:this.data.position,
            personalEmail:data.pemail,
            address1:data.add1,
            address2:data.add2,
            city:data.city,
            postalCode:data.post,
            state:data.state,
            country:data.country,
            image:this.image.name
    }
    const fd=new FormData();
    fd.append('file',this.image);
    this.shared.uploadimg(fd).subscribe(res=>{});
    this.shared.editfaculty(dat,localStorage.getItem("currentuser")).subscribe(res=>{
      this.toastr.success(res.toString());
    })
  }


}
