import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventmodalComponent } from './eventmodal/eventmodal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  displayedColumns: string[] = ['name', 'role', 'guest', 'date'];
  dataSource:any=null;
  filters=['Attended','Organized','Delivered'];
  selected="none";

  constructor(private modal:NgbModal, private config:NgbModalConfig) {
    config.backdrop='static';
   config.keyboard=false;
   }

  ngOnInit(): void {
  }

   openeventmodal(){
    this.modal.open(EventmodalComponent,{centered:true, scrollable:false});
   }
}
