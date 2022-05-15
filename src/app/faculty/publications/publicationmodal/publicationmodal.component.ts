import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-publicationmodal',
  templateUrl: './publicationmodal.component.html',
  styleUrls: ['./publicationmodal.component.scss']
})
export class PublicationmodalComponent implements OnInit {
 
  constructor(private modal:NgbActiveModal) { }
  types:string[]=["Journal","Conference","Patent"]
  disnone:boolean=true;
  hidjou=true;
  hidcon=true;
  hidpat=true;
  schools:string[]=["SAS","SCOPE","SENSE","SMEC","SSL","SWE","VISH","VSB","VSL"]
  contenttype:string[]=["Book Authored","Chapter Authored","Monograph Authored","Book Edited","Chapter Edited","Conference Proceeding-Full Paper","Case Study"];
  ngOnInit(): void {
  }

  closemodal(){
    this.modal.close();
  }
  onchange(data:string){
    if(data===""){
      this.disnone=true;
      this.hidcon=true;
      this.hidjou=true;
      this.hidpat=true;
    }
    if(data==="Journal"){
      this.disnone=false;
      this.hidcon=true;
      this.hidjou=false;
      this.hidpat=true;
    }
    if(data==="Conference"){
      this.disnone=false;
      this.hidcon=false;
      this.hidjou=true;
      this.hidpat=true;
    }
    if(data==="Patent"){
      this.disnone=false;
      this.hidcon=true;
      this.hidjou=true;
      this.hidpat=false;
    }
  }
}
