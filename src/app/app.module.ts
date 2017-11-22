import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GpInformationComponent } from './components/gp-information/gp-information.component';
import { PatientInformationComponent } from './components/patient-information/patient-information.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GpInformationComponent,
    PatientInformationComponent,
    BookAppointmentComponent,
    ProfessionalProfileComponent,
    ContactUsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
