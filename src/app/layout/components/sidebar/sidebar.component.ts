import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';
import { Router, RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent, RouterLink],
})
export class SidebarComponent implements OnInit {
    public appJson: any = packageJson;

    constructor(public menuService: MenuService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    public toggleSidebar() {
        this.menuService.toggleSidebar();
    }

    logout() {
        this.authService.signOut();
        this.router.navigateByUrl("/")
    }
}