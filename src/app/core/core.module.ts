import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
  MatIcon,
  MatIconRegistry,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CovalentChipsModule,
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
import { LoginService } from '../login/shared/login.service';
import { HeaderService } from '../layout/header/shared/header.service';
import { AuthService } from './security/auth.service';
import { BusinessOperationsService } from './shared/business-operations.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpModule,
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
    HeaderService,
    BusinessOperationsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorService, multi: true },
  ],
})

export class CoreModule {}
