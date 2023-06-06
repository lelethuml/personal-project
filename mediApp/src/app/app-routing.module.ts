import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiningInComponent } from './sining-in/sining-in.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [

  //{path : 'home' , component: HomeComponent },

  {path: 'sining-in', component: SiningInComponent},
  {path: 'homepage', component: HomepageComponent},

  
  {path: 'registration', component: RegistrationComponent},

   {path:'', redirectTo: 'homepage', pathMatch:'full'},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
