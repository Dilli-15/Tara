import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  goadmin(){
    this.router.navigate(['/admin']);
  }
  gofac(){
    this.router.navigate(['/faculty']);
  }
  godean(){
    this.router.navigate(['/dean']);
  }

  ngOnInit(): void {
  }

}
