import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dean',
  templateUrl: './dean.component.html',
  styleUrls: ['./dean.component.scss']
})
export class DeanComponent implements OnInit {

  displayedColumns: string[] = ['Event', 'date', 'School', 'guest'];
  displayedColumns1: string[] = ['Event', 'date', 'School', 'guest','Actions'];
  dataSource:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
