import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { FundedprojectmodalComponent } from './fundedprojectmodal/fundedprojectmodal.component';
@Component({
  selector: 'app-fundedprojects',
  templateUrl: './fundedprojects.component.html',
  styleUrls: ['./fundedprojects.component.scss']
})
export class FundedprojectsComponent implements OnInit {
  data:any[]=[];
  constructor(private toast:ToastrService,private modal:NgbModal, private config:NgbModalConfig, private shared:SharedserviceService) { 
    config.backdrop='static';
    config.keyboard=false;
  }

  ngOnInit(): void {
    this.getfp();
  }
  openfpmodal(){
    this.modal.open(FundedprojectmodalComponent,{centered:true, scrollable:true});
  }
  getfp(){
    this.shared.getprobfid(localStorage.getItem("currentuser")).subscribe(res=>{
      this.data=res;
    })
  }
  download(data:any){
    console.log(data);
    this.shared.getfile(data).subscribe(res=>{
        console.log(res.url);
        let a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
       a.href = res.url;
       a.download = data;
       a.target="blank"
       a.click();
    },err=>{this.toast.error("File not found")});
  }
  deletefp(data:any){
    this.shared.deletefp(data).subscribe(res=>{
      this.toast.success(res.toString());
    });
    window.location.reload();
  }
}
