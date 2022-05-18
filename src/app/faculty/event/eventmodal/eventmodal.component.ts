import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service'; 
@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.component.html',
  styleUrls: ['./eventmodal.component.scss']
})

export class EventmodalComponent implements OnInit {
   
  constructor(private modal:NgbActiveModal,private shared:SharedserviceService,private toast:ToastrService) { }
  none:boolean=true;
  Attended:boolean=true;
  Organized:boolean=true;
  Delivered:boolean=true;
   roles:string[]=["Attended","Organized","Delivered"];
   eventtype:string[]=["Guest Lecture","Conference","Seminar","Symposia","Training Programme","Workshop","Orientation Programme","Refresher Programme","Short Term Course","FDP","MOOC/Online Courses"];
   orgtype:string[]=["Industry","Academic","Research Center/Lab"]
  file:any="";
  ngOnInit(): void {
  }
   
  onchange(data:string){
    console.log(data);
  if(data===""){
    this.none=true;
    this.Attended=true;
    this.Delivered=true;
    this.Organized=true;
  }
  if(data==="Attended"){
    this.none=false;
    this.Attended=false;
    this.Delivered=true;
    this.Organized=true;
  }
  if(data==="Organized"){
    this.none=false;
    this.Attended=true;
    this.Delivered=true;
    this.Organized=false;
  }
  if(data==="Delivered"){
    this.none=false;
    this.Attended=true;
    this.Delivered=false;
    this.Organized=true;
  }
  }
  closemodal(){
    this.modal.close();
  }
  addevent(data:any){
    if(data.role==="Attended" || data.role==="Delivered"){
      let dat={
        role:data.role,
        academicYear:data.ay,
        eventLevel:data.level,
        eventType:data.etype,
        eventTitle:data.title,
        organizationName:data.org,
        organizationType:data.otype,
        fromDate:data.from,
        toDate:data.to,
        proof:this.file.name,
        uid: localStorage.getItem("currentuser"),
        registerId:localStorage.getItem("regid")
      }
      this.shared.addADevent(dat).subscribe(res=>{
        this.toast.success("Event added successfully")
      });
      const fd=new FormData();
      fd.append('file',this.file);
      this.shared.uploadfile(fd).subscribe(res=>{});
    }
    if(data.role==="Organized"){
      let dat={
        role:data.role,
        academicYear:data.ay,
        eventLevel:data.level,
        eventType:data.etype,
        eventTitle:data.title,
        organizationName:data.org,
        organizationType:data.otype,
        fromDate:data.from,
        toDate:data.to,
        proof:this.file.name,
        uid: localStorage.getItem("currentuser"),
        registerId:localStorage.getItem("regid"),
        participants:Number(data.nop),
        internalStudents:Number(data.intstu),
        externalStudents:Number(data.extstu),
        internalFaculty:Number(data.intfac),
        externalFaculty:Number(data.extfac),
        totalExpendicture:Number(data.exp),
        revenue:Number(data.rev),
        expenditureByUniversity:Number(data.expsu),
        expenditureBySponsors:Number(data.expss)
      }
      this.shared.addOevent(dat).subscribe(res=>{
        this.toast.success("Event added successfully");
      });
      const fd=new FormData();
      fd.append('file',this.file);
      this.shared.uploadfile(fd).subscribe(res=>{});
    }
    window.location.reload();
  }
  onselecting(event:any){
    if(event.target.files.length>0){
      let file=event.target.files[0];
      this.file=file;
    }
  }
}
