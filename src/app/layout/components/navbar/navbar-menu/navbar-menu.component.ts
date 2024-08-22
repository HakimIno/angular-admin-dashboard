import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    styleUrls: ['./navbar-menu.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NgIf,      // Import NgIf here
        RouterLink, // Import RouterLink here
        RouterModule
    ],
})
export class NavbarMenuComponent implements OnInit {
    breadcrumbs: Array<{ label: string, url: string }> = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.setBreadcrumbs();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.setBreadcrumbs();
            }
        });
    }

    setBreadcrumbs() {
        const root = this.router.routerState.snapshot.root;
        this.breadcrumbs = this.createBreadcrumbs(root);
    }

    createBreadcrumbs(route: any, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
        const children: any[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routeURL: string = child.url.map((segment: { path: any }) => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }

            const label = child.data['breadcrumb'] || routeURL; // Use breadcrumb label if provided
            breadcrumbs.push({ label, url });

            // Recursively process children
            this.createBreadcrumbs(child, url, breadcrumbs);
        }

        return breadcrumbs;
    }

    navigateTo(url: string) {
        this.router.navigate([url]);
    }
}
