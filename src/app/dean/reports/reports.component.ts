import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  orgevents:any[]=[]
  delevents:any[]=[];
  attevents:any[]=[];
  readonly name=localStorage.getItem("name");
   facId:any=localStorage.getItem("facId");
   facdetails:any={name:""};
  constructor(private fs:FileSaverService,private router:Router,private shared:SharedserviceService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.getfacdetails();
    this.getevents();
  
  }
  logout(){
    this.toast.success("Logged Out Sucessfully");
    this.shared.logoutd().subscribe(res=>{});
    localStorage.clear();
    this.router.navigate([""])
  }
  gotod(){
    this.router.navigate(["dean"]);
  }
  getfacdetails(){
    this.shared.getfacbid(this.facId).subscribe(res=>{
      this.facdetails=res;
    });
  }
  getevents(){
    this.shared.getADevents(this.facId).subscribe(res=>{
      for(let i=0;i<res.length;i++){
        if(res[i].role==="Attended"){
          this.attevents.push(res[i]);
        }
        else{this.delevents.push(res[i]);}
      }
    });
    this.shared.getOevents(this.facId).subscribe(res=>{
      this.orgevents=res;
    })
  }
  downloadEvents(){
    let title=this.facdetails.registerId+"_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.attevents);
    const worksheet2=XLSX.utils.json_to_sheet(this.orgevents);
    const worksheet3=XLSX.utils.json_to_sheet(this.delevents);

    const workbook={
      Sheets:{
        "Attended Events":worksheet1,
        "Organized Events":worksheet2,
        "Delivered Events":worksheet3
      },
      SheetNames:["Attended Events","Organized Events","Delivered Events"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);

    
  }

}
