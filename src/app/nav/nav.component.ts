import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultyProfileComponent } from '../faculty-profile/faculty-profile.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private modalservice:NgbModal) { }

  ngOnInit(): void {
  }
 openprofile(){
   this.modalservice.open(FacultyProfileComponent,{centered:true,size:'xl',scrollable:true});
 }
}
