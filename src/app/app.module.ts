import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SampleDataModule } from './sampledata/sampledata.module';


@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, AppRoutingModule, CoreModule, HomeModule, SampleDataModule],
    providers: [],
    bootstrap: [AppComponent]
}) export class AppModule {}
