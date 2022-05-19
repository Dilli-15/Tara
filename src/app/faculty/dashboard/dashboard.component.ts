import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { TemplatemodalComponent } from './templatemodal/templatemodal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private shared:SharedserviceService,private modal:NgbModal, private config:NgbModalConfig) {
    config.backdrop='static';
   config.keyboard=false;
   }
  fp:any[]=[];
  attended:any[]=[];
  delivered:any[]=[];
  organized:any[]=[];
  jou:any[]=[];
  pat:any[]=[];
  con:any[]=[];
  ngOnInit(): void {
    this.getADevent();
    this.getorgevent();
    this.getallpublications();
    this.getfp();
  }
  openevent(){
    this.router.navigate(['/faculty/event']);
  }
  openpublications(){
    this.router.navigate(['/faculty/publications'])
  }
  openfundedpro(){
    this.router.navigate(['/faculty/fundedprojects'])
  }
  getADevent(){
    this.shared.getADevents(localStorage.getItem("currentuser")).subscribe(res=>{
      for(let i=0;i<res.length;i++){
        if(res[i].role==="Attended"){
          this.attended.push(res[i]);
        }
        else{
          this.delivered.push(res[i]);
        }
      }
    })
  }
  getorgevent(){
    this.shared.getOevents(localStorage.getItem("currentuser")).subscribe(res=>{
      this.organized=res;
    })
  }
  getallpublications(){
    let id=localStorage.getItem("currentuser");
    this.shared.getjour(id).subscribe(res=>{
      this.jou=res;
    });
    this.shared.getconf(id).subscribe(res=>{
      this.con=res;
    });
    this.shared.getpat(id).subscribe(res=>{
      this.pat=res;
    });
  }
  getfp(){
    this.shared.getprobfid(localStorage.getItem("currentuser")).subscribe(res=>{
      this.fp=res;
    })
  }
  opentemplate(){
    this.modal.open(TemplatemodalComponent,{centered:true, scrollable:false});
  }
}
