import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: "login",
        loadComponent: () => import("./pages/login/login.component").then((mod) => mod.LoginComponent),
        canActivate: [authGuard],
        data: { requiresAuth: false }
    },
    {
        path: "",
        component: LayoutComponent,
        canActivate: [authGuard],
        data: { requiresAuth: true },
        children: [
            {
                path: "dashboard",
                loadComponent: () => import("./pages/dashboard/dashboard.component").then((mod) => mod.DashboardComponent),
                // children: [
                //     {
                //         path: "home",
                //         loadComponent: () => import("./pages/dashboard/dashboard.component").then((mod) => mod.DashboardComponent),
                //         data: { breadcrumb: "Home" },
                //         children: [
                //             {
                //                 path: "service",
                //                 loadComponent: () => import("./pages/dashboard/dashboard.component").then((mod) => mod.DashboardComponent),
                //                 data: { breadcrumb: "service" },
                //             }
                //         ]
                //     },
                // ]
            }
        ]
    },
    {
        path: 'errors',
        loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule),
    },
    { path: '**', redirectTo: 'errors/404' },
];


