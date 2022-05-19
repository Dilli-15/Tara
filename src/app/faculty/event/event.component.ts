import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { EventmodalComponent } from './eventmodal/eventmodal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  displayedColumns: string[] = ['name', 'role', 'guest', 'date'];
  dataSource:any=null;
  filters=['Attended','Organized','Delivered'];
  selected="none";
  attended:any[]=[];
  delivered:any[]=[];
  organized:any[]=[];
  satt:boolean=true;
  sdeli:boolean=true;
  sorg:boolean=true;
  constructor(private toast:ToastrService,public sanitizer: DomSanitizer, private modal:NgbModal, private config:NgbModalConfig, private shared:SharedserviceService) {
    config.backdrop='static';
   config.keyboard=false;
   }

  ngOnInit(): void {
    this.getADevent();
    this.getorgevent();
  }
   onchange(dat:any){
     if(dat==="Attended"){
       this.sdeli=false;
       this.sorg=false;
       this.satt=true;
     }
    else if(dat==="Organized"){
       this.sdeli=false;
       this.satt=false;
       this.sorg=true;
     }
    else if(dat==="Delivered"){
       this.satt=false;
       this.sorg=false;
       this.sdeli=true;
     }
     else{
       this.sdeli=true;
       this.sorg=true;
       this.satt=true;
     }
   }
   openeventmodal(){
    this.modal.open(EventmodalComponent,{centered:true, scrollable:false});
   }
   getADevent(){
     this.shared.getADevents(localStorage.getItem("currentuser")).subscribe(res=>{
       for(let i=0;i<res.length;i++){
         if(res[i].role==="Attended"){
           this.attended.push(res[i]);
         }
         else if(res[i].role==="Delivered"){
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
   download(data:any){
     console.log(data);
     this.shared.getfile(data).subscribe(res=>{
         console.log(res);
         let a = document.createElement("a");
         a.setAttribute('style', 'display:none;');
         var blob = new Blob([res._body], { type: 'application/pdf' });
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = data;
        a.click();
     },err=>{this.toast.error("File not found")});
   }
}
