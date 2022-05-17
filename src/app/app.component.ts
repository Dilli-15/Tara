import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  arr:string[]=[];
  title = 'capstone';
  // testing(data:any){
  //   console.log(data.ta);
  //   let str:string=data.ta;
  //   let sta:string[]=str.split("\n");
  //   this.arr.push(str);
  //   console.log(sta);
  // }
}
