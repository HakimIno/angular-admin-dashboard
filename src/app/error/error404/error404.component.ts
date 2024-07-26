import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';


@Component({
    selector: 'app-error404',
    standalone: true,
    imports: [AngularSvgIconModule, ButtonComponent],
    templateUrl: './error404.component.html',
    styleUrl: './error404.component.scss',
})
export class Error404Component {
    constructor(private router: Router) { }

    goToHomePage() {
        this.router.navigate(['/']);
    }
}