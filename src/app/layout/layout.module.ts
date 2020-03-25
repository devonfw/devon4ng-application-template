import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule],
  declarations: [NavBarComponent, HeaderComponent],
  exports: [NavBarComponent, HeaderComponent],
})
export class LayoutModule {}
