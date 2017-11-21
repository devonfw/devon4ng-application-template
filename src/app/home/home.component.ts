import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    sideNavOpened = false;
    constructor(private router: Router,
        public media: TdMediaService) {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    onToggle(value) {
        this.sideNavOpened = value;
    }

    close() {
        this.sideNavOpened = false;
    }
}
