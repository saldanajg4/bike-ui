import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

/****
 * if more specific then include it first or before a more generalize page, otherwise it could be picked up
 * if more general url is requested.
 * with import auth.guard secure only the ones that we require authorization like admin ones.
 * Add anohter has value with canActivate : [AuthGuard] will check if it's authenticated
 * and if token is not expired.  And include the AuthGuard module to app.module
 */
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/view/:id', 
    component: ViewRegistrationComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { path: 'callback', component: CallbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
