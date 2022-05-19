import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-templatemodal',
  templateUrl: './templatemodal.component.html',
  styleUrls: ['./templatemodal.component.scss']
})
export class TemplatemodalComponent implements OnInit {

  constructor(private modal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  closemodal(){
    this.modal.close();
  }
  download(){
    let link = document.createElement("a");
        link.download = "Template.pdf";
        link.href = "../assets/files/template.pdf";
        link.click();
  }
}
