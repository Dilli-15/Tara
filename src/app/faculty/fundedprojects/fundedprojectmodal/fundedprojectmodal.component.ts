import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';
@Component({
  selector: 'app-fundedprojectmodal',
  templateUrl: './fundedprojectmodal.component.html',
  styleUrls: ['./fundedprojectmodal.component.scss']
})
export class FundedprojectmodalComponent implements OnInit {
  file:any="";
  constructor(private modal:NgbActiveModal, private shared:SharedserviceService,private toast:ToastrService) { }
  forminval:boolean=false;
  degrees:string[]=["Bachelor of Technology","Bachelor of Business Administration","Law","Master of Technology","Master of Technology(Integrated)","Research Program(6 yrs)","Development Improvement Preparation for Leadership Organizational Management Achievement"];
  ngOnInit(): void {
  }
  closemodal(){
    this.modal.close();
  }
  addpro(data:any){
    let dat={
      academicYear:data.ay,
      degree:data.deg,
      organizerErpId1:data.erp1,
      coOrganizerErpId2:data.erp2,
      coOrganizerErpId3:data.erp3,
      projectTitle:data.tit,
      startDate:data.sd,
      endDate:data.ed,
      noOfStudents:data.nos,
      list:data.los,
      proof:this.file.name,
      uid:localStorage.getItem("currentuser"),
      registerId:localStorage.getItem("regid")
    }
    this.shared.addfundpro(dat).subscribe(res=>{
      this.toast.success("Added Successfully");
    });
    const fd=new FormData();
    fd.append('file',this.file);
    this.shared.uploadfile(fd).subscribe(res=>{});
    window.location.reload();
  }
  onselecting(event:any){
    if(event.target.files.length>0){
      let file=event.target.files[0];
      this.file=file;
    }
    let arr=this.file.name.split(".")
    if(arr[arr.length-1]=="pdf"){
      this.forminval=false;
    }else{this.forminval=true;}
  }
}
