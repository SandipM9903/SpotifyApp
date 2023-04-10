import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"song", component:SongComponent,canActivate:[AuthGuard]},
  {path:"home", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"guest", component:GuestComponent},
  {path:"guest-home", component:GuestHomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
