import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-fundedprojectmodal',
  templateUrl: './fundedprojectmodal.component.html',
  styleUrls: ['./fundedprojectmodal.component.scss']
})
export class FundedprojectmodalComponent implements OnInit {

  constructor(private modal:NgbActiveModal) { }
 degrees:string[]=["Bachelor of Technology","Bachelor of Business Administration","Law","Master of Technology","Master of Technology(Integrated)","Research Program(6 yrs)","Development Improvement Preparation for Leadership Organizational Management Achievement"];
  ngOnInit(): void {
  }
  closemodal(){
    this.modal.close();
  }
}
