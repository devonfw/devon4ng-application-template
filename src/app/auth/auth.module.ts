import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthDataRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';

/* @export
 * @class AuthDataModule
 */
@NgModule({
  imports: [CommonModule, AuthDataRoutingModule],
  declarations: [],
  providers: [LoginComponent],
})
export class AuthDataModule {}
