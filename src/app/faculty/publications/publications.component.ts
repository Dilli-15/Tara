import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PublicationmodalComponent } from './publicationmodal/publicationmodal.component';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role', 'guest', 'date'];
  dataSource:any=null;
  constructor(private modal:NgbModal, private config:NgbModalConfig) {
    config.backdrop='static';
    config.keyboard=false;
   }

  ngOnInit(): void {
  }
  openpublicationmodal(){
    this.modal.open(PublicationmodalComponent,{centered:true, scrollable:true});
  }

}
