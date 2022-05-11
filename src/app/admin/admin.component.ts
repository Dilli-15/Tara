import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SharedserviceService } from '../sharedservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'mail', 'school'];
  dataSource:any=null;
  show=true;
  adddf:string="";

  constructor(private shared:SharedserviceService,
     private modalService:NgbModal,
      config:NgbModalConfig,
      private toast:ToastrService) {
    config.backdrop='static';
    config.keyboard=false;
   }

  ngOnInit(): void {
   this.getfaculty();
  }
  getfaculty(){
    this.shared.getfac().subscribe(res=>{
      this.dataSource=res;
    });
    console.log(this.dataSource);
  }
    openVerticallyCentered(content:any,st:string) {
      this.adddf=st;
      console.log(this.adddf);
    this.modalService.open(content, { centered: true });
  }
  addf(data:any){
    let dat={
      name:data.name,
      password:data.pass,
      mail:data.email,
      phonenumber:data.phone.toString(),
      school:data.school,
      registerid:data.id
    }
    console.log(dat);
    this.shared.addfac(dat).subscribe(res=>{
      this.toast.success("Faculty Added Successfully");
    })

  }

}
