import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedserviceService } from '../sharedservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  schools:string[]=["SAS","SCOPE","SENSE","SMEC","SSL","SWE","VISH","VSB","VSL"]
  displayedColumns: string[] = ['Id', 'name', 'mail', 'school'];
  displayedColumnsd: string[] = ['Id', 'name', 'school'];
  dataSource:any=null;
  dataSourced:any=null;
  show=true;
  adddf:string="";
  hid:boolean=false;

  constructor(private shared:SharedserviceService,
    private router:Router,
     private modalService:NgbModal,
      config:NgbModalConfig,
      private toast:ToastrService) {
    config.backdrop='static';
    config.keyboard=false;
   }
   
  ngOnInit(): void {
   this.getfaculty();
   this.getdean();
  }
  getfaculty(){
    this.shared.getfac().subscribe(res=>{
      this.dataSource=res;
    });
  }
  getdean(){
    this.shared.getd().subscribe(res=>{
      this.dataSourced=res;
    })
  }
    openVerticallyCentered(content:any,st:string) {
      this.adddf=st;
      if(this.adddf==="Dean"){
        this.hid=true;
      }
      else{
        this.hid=false;
      }
    this.modalService.open(content, { centered: true });
  }
  addfa(data:any){
    if(this.adddf==="Faculty"){
      let dat={
        registerId:data.id,
        name:data.name,
        password:data.pass,
        mail:data.email,
        phonenumber:data.phone,
        school:data.school,
        position:data.grade,
        personalEmail:" ",
        address1:" ",
        address2:" ",
        city:" ",
        postalCode:" ",
        state:" ",
        country:" ",
        image:" "
    }
    this.shared.addfac(dat).subscribe(res=>{
      this.toast.success("Added Sucessfully");
    },err=>{this.toast.error("Try again with valid details","Something went wrong ")})
    }
    if(this.adddf==="Dean"){
      let dat={
        registerId:data.id,
        name:data.name,
        password:data.pass,
        mail:data.mail,
        school:data.school,
    }
    this.shared.adddean(dat).subscribe(res=>{
      this.toast.success("Added Sucessfully");
    },err=>{this.toast.error("Try again with valid details","Something went wrong ")})
    }
    window.location.reload();
  }
  logout(){
    this.router.navigate([""]);
  }
}
