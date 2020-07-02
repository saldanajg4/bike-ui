import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

/****
 * if more specific then include it first or before a more generalize page, otherwise it could be picked up
 * if more general url is requested
 */
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/view/:id', component: ViewRegistrationComponent},
  { path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
