import { Component, OnInit,PipeTransform } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';
@Component({
  selector: 'app-dean',
  templateUrl: './dean.component.html',
  styleUrls: ['./dean.component.scss'],
})
export class DeanComponent implements OnInit {
  attended:any[]=[];
  delivered:any[]=[];
  organized:any[]=[];
  satt:boolean=true;
  sdeli:boolean=true;
  sorg:boolean=true;
  filters=['Attended','Organized','Delivered'];
  school=localStorage.getItem("school");
   name=localStorage.getItem("name");
  displayedColumns: string[] = ['Event', 'date', 'School', 'guest'];
  displayedColumns1: string[] = ['Event', 'date', 'School', 'guest','Actions'];
  dataSource:any=null;
  faculty:any[]=[];
  unfiltered:any[]=[];
  constructor(private fs:FileSaverService,private shared:SharedserviceService, private toast:ToastrService, private router:Router) {
   }
  
  ngOnInit(): void {
    this.getfac();
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
logout(){
  this.toast.success("Logged Out Sucessfully");
  this.shared.logoutd().subscribe(res=>{});
  localStorage.clear();
  this.router.navigate([""])
}
getfac(){
  this.shared.getfacbs(localStorage.getItem("school")).subscribe(res=>{
    this.faculty=res;
    this.getevents();
    this.unfiltered=res;
  });
}
filter(data:any){
   this.faculty=this.unfiltered.filter(function(val){
     return val.registerId.toString().toLowerCase().includes(
       data.toString().toLowerCase())||
       val.name.toString().toLowerCase().includes(
         data.toString().toLowerCase())||
       val.mail.toString().toLowerCase().includes(
         data.toString().toLowerCase())
   });
}
facultyrep(data:any){
  localStorage.setItem("facId",data);
  this.router.navigate(['dean/reports']);
}
download(data:any){
  console.log(data);
  this.shared.getfile(data).subscribe(res=>{

  });
}
getevents(){
  for(let i=0;i<this.faculty.length;i++){
    this.shared.getADevents(this.faculty[i]._id.toString()).subscribe(res=>{
      for(let j=0;j<res.length;j++){
        if(res[j].role=="Attended"){
          this.attended.push(res[j]);
        }
        else if(res[j].role=="Delivered"){
          this.delivered.push(res[j]);
        }
      }
    });
    this.shared.getOevents(this.faculty[i]._id).subscribe(res=>{
      for(let j=0;j<res.length;j++){
        this.organized.push(res[i]);
      }
    })
  }
}
downloadevents(dat:any){
  if(dat===""){
  let title=this.school+"_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.attended);
    const worksheet2=XLSX.utils.json_to_sheet(this.organized);
    const worksheet3=XLSX.utils.json_to_sheet(this.delivered);

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
  else if(dat==="Attended"){
    let title=this.school+"Attended_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.attended);

    const workbook={
      Sheets:{
        "Attended Events":worksheet1
      },
      SheetNames:["Attended Events"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);
  }
  else if(dat==="Delivered"){
    let title=this.school+"Delivered_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet3=XLSX.utils.json_to_sheet(this.delivered);

    const workbook={
      Sheets:{
        "Delivered Events":worksheet3
      },
      SheetNames:["Delivered Events"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);
  }
  else{
    let title=this.school+"Organized_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet2=XLSX.utils.json_to_sheet(this.organized);

    const workbook={
      Sheets:{
        "Organized Events":worksheet2,
      },
      SheetNames:["Organized Events"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);
  }

}
}
