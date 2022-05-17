import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultyProfileComponent } from '../faculty-profile/faculty-profile.component';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor(private modalservice:NgbModal, private router:Router,private shared:SharedserviceService,private toast:ToastrService) { }
  data:any={name:" "};

  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"));
    this.getfacbid();
  }
 openprofile(){
   this.modalservice.open(FacultyProfileComponent,{centered:true,size:'xl',scrollable:true});
 }
 facdash(){
  this.router.navigate(["/faculty"]);
 }
 getfacbid(){
   this.shared.getfacbid(localStorage.getItem("currentuser")).subscribe(res=>{
     this.data=res;
   });
 }
 logout(){
   this.toast.success("Logged out Sucessfully");
   this.shared.logoutfn().subscribe(res=>{});
   localStorage.clear(); 
   
   this.router.navigate([''])
 }

}
