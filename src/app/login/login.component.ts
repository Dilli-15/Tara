import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../sharedservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toaser:ToastrService, private router:Router,private shared:SharedserviceService) { }

  goadmin(){
    this.router.navigate(['/admin']);
  }
  gofaclog(data:any){
    let dat={
      registerId:data.regid,
      password:data.pass
    }
    this.shared.faclogin(dat).subscribe(res=>{
      if(res.msg==="Login success"){
        this.toaser.success(res.msg);
        localStorage.setItem("currentuser",res.id);
        this.getfacbid();
       this.router.navigate(['/faculty']);
      }
      
    },err=>{
      this.toaser.error("Invalid Id or Password","Login Falied");
    });
  }
  godeanlog(data:any){
    let dat={
      registerId:data.regid,
      password:data.pass
    }
    this.shared.deanlogin(dat).subscribe(res=>{
      if(res.msg==="Login success"){
        this.toaser.success(res.msg);
        localStorage.setItem("name",res.name);
        localStorage.setItem("school",res.school);
        this.router.navigate(['/dean']);
      }
    },err=>{
      this.toaser.error("Invalid Id or Password","Login Falied");
    });
    // 
  }
  getfacbid(){
    this.shared.getfacbid(localStorage.getItem("currentuser")).subscribe(res=>{
      localStorage.setItem("regid",res.registerId.toString());
    });
  }

  ngOnInit(): void {
  }

}
