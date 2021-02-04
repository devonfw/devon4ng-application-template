import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  sideNavOpened = false;
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
