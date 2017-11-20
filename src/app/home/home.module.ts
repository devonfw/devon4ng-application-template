import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    TranslateModule,
  ],
  providers: [
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {}
