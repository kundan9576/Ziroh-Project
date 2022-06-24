import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SecurePhotosComponent } from './components/secure-photos/secure-photos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const appRoutes:Routes=[  
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SecurePhotosComponent,
    SidebarComponent
  ],
  entryComponents:[ ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: "registerImmediately"  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
