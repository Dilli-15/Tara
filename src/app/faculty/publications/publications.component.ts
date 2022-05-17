import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { PublicationmodalComponent } from './publicationmodal/publicationmodal.component';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  types:string[]=["Journal","Conference","Patent"]
  sjou:boolean=true;
  spat:boolean=true;
  scon:boolean=true;
  jou:any[]=[];
  pat:any[]=[];
  con:any[]=[];
  dataSource:any=null;
  constructor(private modal:NgbModal, private config:NgbModalConfig, private shared:SharedserviceService) {
    config.backdrop='static';
    config.keyboard=false;
   }
   onchange(dat:any){
    if(dat==="Journal"){
      this.spat=false;
      this.scon=false;
      this.sjou=true;
    }
   else if(dat==="Conference"){
      this.spat=false;
      this.sjou=false;
      this.scon=true;
    }
   else if(dat==="Patent"){
      this.sjou=false;
      this.scon=false;
      this.spat=true;
    }
    else{
      this.spat=true;
      this.scon=true;
      this.sjou=true;
    }
  }
  ngOnInit(): void {
    this.getallpublications();
  }
  openpublicationmodal(){
    this.modal.open(PublicationmodalComponent,{centered:true, scrollable:true});
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

}
