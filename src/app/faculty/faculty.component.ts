import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SharedserviceService } from '../sharedservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'guest', 'status'];
  dataSource:any=null;
  filters=['Approved','Unapproved','Waiting for Approval'];
  selected="none";

  constructor(private shared:SharedserviceService,
    private modalService:NgbModal,
     config:NgbModalConfig,
     private toast:ToastrService) {
   config.backdrop='static';
   config.keyboard=false;
  }

  openVerticallyCentered(content:any) {
     this.modalService.open(content, { centered: true });
}

  ngOnInit(): void {
  }

}
