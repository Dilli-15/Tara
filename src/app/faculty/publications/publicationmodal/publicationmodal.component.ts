import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';
@Component({
  selector: 'app-publicationmodal',
  templateUrl: './publicationmodal.component.html',
  styleUrls: ['./publicationmodal.component.scss']
})
export class PublicationmodalComponent implements OnInit {
 
  constructor(private modal:NgbActiveModal, private shared:SharedserviceService, private toast:ToastrService) { }
  types:string[]=["Journal","Conference","Patent"]
  file:any="";
  disnone:boolean=true;
  hidjou=true;
  hidcon=true;
  hidpat=true;
  schools:string[]=["SAS","SCOPE","SENSE","SMEC","SSL","SWE","VISH","VSB","VSL"]
  contenttype:string[]=["Book Authored","Chapter Authored","Monograph Authored","Book Edited","Chapter Edited","Conference Proceeding-Full Paper","Case Study"];
  forminval:boolean=false
  ngOnInit(): void {
  }

  closemodal(){
    this.modal.close();
  }
  onchange(data:string){
    if(data===""){
      this.disnone=true;
      this.hidcon=true;
      this.hidjou=true;
      this.hidpat=true;
    }
    if(data==="Journal"){
      this.disnone=false;
      this.hidcon=true;
      this.hidjou=false;
      this.hidpat=true;
    }
    if(data==="Conference"){
      this.disnone=false;
      this.hidcon=false;
      this.hidjou=true;
      this.hidpat=true;
    }
    if(data==="Patent"){
      this.disnone=false;
      this.hidcon=true;
      this.hidjou=true;
      this.hidpat=false;
    }
  }
  addpublication(data:any){
    if(data.type==="Journal"){
      let dat={
        type:data.type,
        publicationYear:data.py,
        publicationLevel:data.level,
        title:data.title,
        authorName:data.Aname,
        journalName:data.Jname,
        issnNo:data.issn,
        eissnNo:data.eissn,
        volumeNo:data.vol,
        issueNo:data.issueno,
        startPage:data.sp,
        endPage:data.ep,
        isWebOfScience:data.wos,
        isPubMed:data.pm,
        isIeee:data.ieee,
        isIci:data.ici,
        isGoogleScholar:data.gs,
        isCoauthByUgStudent:data.ugs,
        isCoauthbyPgStudent:data.pgs,
        proof:this.file.name,
        uid:localStorage.getItem("currentuser"),
        registerId:localStorage.getItem("regid")
      }
      this.shared.addjournal(dat).subscribe(res=>{
        this.toast.success("Added Successfully");
      });
      const fd=new FormData();
      fd.append('file',this.file);
      this.shared.uploadfile(fd).subscribe(res=>{});
    }
    if(data.type==="Conference"){
      let dat={
        type:data.type,
        publicationYear:data.cpy,
        publicationLevel:data.clevel,
        contentType:data.ctype,
        contentTitle:data.ctitle,
        isbnNo:data.isbn,
        authorName:data.cAname,
        publishername:data.pname,
        proof:this.file.name,
        uid:localStorage.getItem("currentuser"),
        registerId:localStorage.getItem("regid")
      }
      this.shared.addconference(dat).subscribe(res=>{
        this.toast.success("Added Successfully");
      });
      const fd=new FormData();
      fd.append('file',this.file);
      this.shared.uploadfile(fd).subscribe(res=>{});
    }
    if(data.type==="Patent"){
      let dat={
        type:data.type,
        academicYear:data.ay,
        firstApplication:data.name1,
        secondApplication:data.name2,
        thirdApplication:data.name3,
        forthApplication:data.name4,
        patentTitle:data.ptitle,
        applicationNo:data.appno,
        countryApplied:data.con,
        filledDate:data.adate,
        status:data.status,
        patentNo:data.pno,
        awardedDate:data.Adate,
        proof:this.file.name,
        uid:localStorage.getItem("currentuser"),
        registerId:localStorage.getItem("regid")
      }
      this.shared.addpatent(dat).subscribe(res=>{
        this.toast.success("Added Successfully");
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
    let arr=this.file.name.split(".")
    if(arr[arr.length-1]=="pdf"){
      this.forminval=false;
    }else{this.forminval=true;}
  }
}
