import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [
        AngularSvgIconModule,
        NavbarMenuComponent,
        ProfileMenuComponent
    ],
})
export class NavbarComponent implements OnInit {
    constructor(private menuService: MenuService) { }

    ngOnInit(): void { }

    public toggleMobileMenu(): void {
        this.menuService.showMobileMenu = true;
    }
}