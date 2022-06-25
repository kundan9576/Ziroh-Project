import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SecurePhotosComponent } from './components/secure-photos/secure-photos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HelpComponent } from './components/help/help.component';
import { SecureFilesComponent } from './components/secure-files/secure-files.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurePhotosComponent,
    SidebarComponent,
    AboutUsComponent,
    MyProfileComponent,
    HelpComponent,
    SecureFilesComponent
  ],
  entryComponents:[ ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: "registerImmediately"  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
