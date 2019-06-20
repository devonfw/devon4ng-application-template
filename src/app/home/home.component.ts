import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sideNavOpened: boolean = false;
  isMobile: any;
  constructor(private router: Router, private breakpoint: BreakpointObserver) {
    this.breakpoint.observe(Breakpoints.Handset).subscribe((data: any) => {
      this.isMobile = data.matches;
    });
  }

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
