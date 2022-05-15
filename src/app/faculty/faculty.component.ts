import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SharedserviceService } from '../sharedservice.service';
import { ToastrService } from 'ngx-toastr';
import { FacultyProfileComponent } from '../faculty-profile/faculty-profile.component';
import { EventmodalComponent } from './event/eventmodal/eventmodal.component';
import { PublicationmodalComponent } from './publications/publicationmodal/publicationmodal.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  constructor(private shared:SharedserviceService,
    private modalService:NgbModal,
     config:NgbModalConfig,
     private toast:ToastrService) {
   config.backdrop='static';
   config.keyboard=false;
  }

  openeventmodal() {
     this.modalService.open(EventmodalComponent, { centered: true,scrollable:true });
  }
  openpublicationmodal(){
    this.modalService.open(PublicationmodalComponent,{centered:true, scrollable:true});
  }

  ngOnInit(): void {
  }
}
