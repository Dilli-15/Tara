import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SharedserviceService } from './sharedservice.service';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import { FacultyComponent } from './faculty/faculty.component';
import { NavComponent } from './nav/nav.component';
import {MatSelectModule} from '@angular/material/select';
import { DeanComponent } from './dean/dean.component';
import { DashboardComponent } from './faculty/dashboard/dashboard.component';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { EventComponent } from './faculty/event/event.component';
import { EventmodalComponent } from './faculty/event/eventmodal/eventmodal.component';
import { PublicationsComponent } from './faculty/publications/publications.component';
import { PublicationmodalComponent } from './faculty/publications/publicationmodal/publicationmodal.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FacultyComponent,
    NavComponent,
    DeanComponent,
    DashboardComponent,
    FacultyProfileComponent,
    EventComponent,
    EventmodalComponent,
    PublicationsComponent,
    PublicationmodalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule

  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
