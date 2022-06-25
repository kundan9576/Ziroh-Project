import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SecureFilesComponent } from './components/secure-files/secure-files.component';
import { SecurePhotosComponent } from './components/secure-photos/secure-photos.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SecurePhotosComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'securefiles', component: SecureFilesComponent },
  { path: '**', component: SecurePhotosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }