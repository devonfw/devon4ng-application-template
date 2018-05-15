import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import {
  CovalentChipsModule,
  CovalentLayoutModule,
  CovalentExpansionPanelModule,
  CovalentDataTableModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentDialogsModule,
  CovalentNotificationsModule,
  CovalentCommonModule,
} from '@covalent/core';
import 'hammerjs';

import { HttpRequestInterceptorService } from './security/httpRequestInterceptor.service';
import { AuthGuard } from './security/auth-guard.service';
import { AuthService } from './security/auth.service';
import { BusinessOperationsService } from './shared/business-operations.service';
import { LoginService } from './security/login.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    CdkTableModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    CovalentDialogsModule,
  ],
  declarations: [],
  providers: [
    AuthGuard,
    LoginService,
    AuthService,
    BusinessOperationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
