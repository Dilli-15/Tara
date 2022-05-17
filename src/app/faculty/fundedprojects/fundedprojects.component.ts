import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FundedprojectmodalComponent } from './fundedprojectmodal/fundedprojectmodal.component';
@Component({
  selector: 'app-fundedprojects',
  templateUrl: './fundedprojects.component.html',
  styleUrls: ['./fundedprojects.component.scss']
})
export class FundedprojectsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role', 'guest', 'date'];
  dataSource:any=null;
  constructor(private modal:NgbModal, private config:NgbModalConfig) { 
    config.backdrop='static';
    config.keyboard=false;
  }

  ngOnInit(): void {
  }
  openfpmodal(){
    this.modal.open(FundedprojectmodalComponent,{centered:true, scrollable:true});
  }

}
