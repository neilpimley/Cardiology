import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GpInformationComponent } from './components/gp-information/gp-information.component';
import { PatientInformationComponent } from './components/patient-information/patient-information.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

//import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gp-information',
    component: GpInformationComponent 
  },
  {
    path: 'patient-information',
    component:  PatientInformationComponent 
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent 
  },
  {
    path: 'professional-profile',
    component:  ProfessionalProfileComponent 
  },
  {
    path: 'contact-us',
    component: ContactUsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
