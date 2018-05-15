import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  sideNavOpened: boolean = false;
  constructor(private router: Router, public media: TdMediaService) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  onToggle(value: boolean): void {
    this.sideNavOpened = value;
  }

  close(): void {
    this.sideNavOpened = false;
  }
}
