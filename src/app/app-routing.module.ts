import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DeanComponent } from './dean/dean.component';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { EventComponent } from './faculty/event/event.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FundedprojectsComponent } from './faculty/fundedprojects/fundedprojects.component';
import { PublicationsComponent } from './faculty/publications/publications.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'dean', component:DeanComponent},
  {path:'faculty/event',component:EventComponent},
  {path:'faculty/publications',component:PublicationsComponent},
  {path:"faculty/fundedprojects",component:FundedprojectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
