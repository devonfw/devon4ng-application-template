// Components
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { Router } from '@angular/router';
import { HttpRequestInterceptorService } from './core/security/httpRequestInterceptor.service';
import { CookieXSRFStrategy, XSRFStrategy } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

// modules
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

export function translateFactory(http: HttpClient) {
    return  new TranslateHttpLoader(http);
}
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FormsModule,
        HeaderModule,
        HomeModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        InitialPageComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {}
