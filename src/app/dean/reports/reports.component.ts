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
  journals:any[]=[];
  conferences:any[]=[];
  patents:any[]=[];
  fp:any[]=[];
  readonly name=localStorage.getItem("name");
   facId:any=localStorage.getItem("facId");
   facdetails:any={name:""};
  constructor(private fs:FileSaverService,private router:Router,private shared:SharedserviceService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.getfacdetails();
    this.getevents();
    this.getpublications();
    this.getFP();
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
  getpublications(){
    this.shared.getconf(this.facId).subscribe(res=>{
      this.conferences=res;
    });
    this.shared.getjour(this.facId).subscribe(res=>{
      this.journals=res;
    });
    this.shared.getpat(this.facId).subscribe(res=>{
      this.patents=res;
    });

  }
  getFP(){
    this.shared.getprobfid(this.facId).subscribe(res=>{
      this.fp=res;
    });
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
  downloadAEvents(){
    let title=this.facdetails.registerId+" Attended_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.attevents);

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
  downloadOEvents(){
    let title=this.facdetails.registerId+" Organized_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet2=XLSX.utils.json_to_sheet(this.orgevents);

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
  downloadDEvents(){
    let title=this.facdetails.registerId+" Delivered_Events"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet3=XLSX.utils.json_to_sheet(this.delevents);

    const workbook={
      Sheets:{
        "Delivered Events":worksheet3
      },
      SheetNames:["Attended Events","Organized Events","Delivered Events"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);
    
  }
  downloadPub(){
    let title=this.facdetails.registerId+"_Publications"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.conferences);
    const worksheet2=XLSX.utils.json_to_sheet(this.journals);
    const worksheet3=XLSX.utils.json_to_sheet(this.patents);

    const workbook={
      Sheets:{
        "Conferences":worksheet1,
        "Journals":worksheet2,
        "Patents":worksheet3
      },
      SheetNames:["Conferences","Journals","Patents"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);
  }
  downloadJou(){
    let title=this.facdetails.registerId+"_Journals"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet2=XLSX.utils.json_to_sheet(this.journals);

    const workbook={
      Sheets:{
        "Journals":worksheet2
      },
      SheetNames:["Journals"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);

  }
  downloadCon(){
    let title=this.facdetails.registerId+"_Publications"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet1=XLSX.utils.json_to_sheet(this.conferences);

    const workbook={
      Sheets:{
        "Conferences":worksheet1
      },
      SheetNames:["Conferences"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);

  }
  downloadPat(){
    let title=this.facdetails.registerId+"_Publications"
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet3=XLSX.utils.json_to_sheet(this.patents);

    const workbook={
      Sheets:{
        "Patents":worksheet3
      },
      SheetNames:["Patents"]
    }
    const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
    this.fs.save(blobdata,title);

  }
 downloadfp(){
  let title=this.facdetails.registerId+"_Funded-Projects"
  const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const worksheet1=XLSX.utils.json_to_sheet(this.fp);

  const workbook={
    Sheets:{
      "Funded Projects":worksheet1
    },
    SheetNames:["Funded Projects"]
  }
  const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
  const blobdata=new Blob([excelbuffer],{type:EXCEL_TYPE})
  this.fs.save(blobdata,title);
}

}
