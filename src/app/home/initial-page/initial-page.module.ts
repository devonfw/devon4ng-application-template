import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { InitialPageRoutingModule } from './initial-page-routing.module';
import { InitialPageComponent } from './initial-page.component';

/* @export
 * @class HomeModule
 */
@NgModule({
  imports: [CommonModule, CoreModule, InitialPageRoutingModule],
  providers: [],
  declarations: [InitialPageComponent],
  exports: [InitialPageComponent],
})
export class InitialPageModule {}
