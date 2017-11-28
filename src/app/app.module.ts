import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';  // DEPRECATED: Should be removed for Angular 6

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { SampleDataModule } from './sample-data/sample-data.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpModule,                // DEPRECATED: Should be removed for Angular 6
    HttpClientModule,
    HttpClientXsrfModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SampleDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
