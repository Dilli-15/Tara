import { Component, OnInit,PipeTransform } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dean',
  templateUrl: './dean.component.html',
  styleUrls: ['./dean.component.scss'],
})
export class DeanComponent implements OnInit {
  school=localStorage.getItem("school");
   name=localStorage.getItem("name");
  displayedColumns: string[] = ['Event', 'date', 'School', 'guest'];
  displayedColumns1: string[] = ['Event', 'date', 'School', 'guest','Actions'];
  dataSource:any=null;
  faculty:any[] | undefined;
  unfiltered:any[]=[];
  constructor(private shared:SharedserviceService, private toast:ToastrService, private router:Router) {
   }
  
  ngOnInit(): void {
    this.getfac();
  }
logout(){
  this.toast.success("Logged Out Sucessfully");
  this.shared.logoutd().subscribe(res=>{});
  localStorage.clear();
  this.router.navigate([""])
}
getfac(){
  this.shared.getfacbs(localStorage.getItem("school")).subscribe(res=>{
    this.faculty=res;
    this.unfiltered=res;
  });
}
filter(data:any){
   this.faculty=this.unfiltered.filter(function(val){
     return val.registerId.toString().toLowerCase().includes(
       data.toString().toLowerCase())||
       val.name.toString().toLowerCase().includes(
         data.toString().toLowerCase())||
       val.mail.toString().toLowerCase().includes(
         data.toString().toLowerCase())
   });
}
facultyrep(data:any){
  localStorage.setItem("facId",data);
  this.router.navigate(['dean/reports']);
}
}
