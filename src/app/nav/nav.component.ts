import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultyProfileComponent } from '../faculty-profile/faculty-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private modalservice:NgbModal, private router:Router) { }

  ngOnInit(): void {
  }
 openprofile(){
   this.modalservice.open(FacultyProfileComponent,{centered:true,size:'xl',scrollable:true});
 }
 facdash(){
  this.router.navigate(["/faculty"]);
 }
}
