import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-profile-menu',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, AngularSvgIconModule],
    animations: [
        trigger('openClose', [
            state(
                'open',
                style({
                    opacity: 1,
                    transform: 'translateY(0)',
                    visibility: 'visible',
                }),
            ),
            state(
                'closed',
                style({
                    opacity: 0,
                    transform: 'translateY(-20px)',
                    visibility: 'hidden',
                }),
            ),
            transition('open => closed', [animate('0.2s')]),
            transition('closed => open', [animate('0.2s')]),
        ]),
    ],
})
export class ProfileMenuComponent implements OnInit {
    public isOpen = false;
    public profileMenu = [
        {
            title: 'Your Profile',
            icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/user-7-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL3VzZXItNy1zdmdyZXBvLWNvbS5wbmciLCJpYXQiOjE3MjIzMTQ1NjgsImV4cCI6MTc1Mzg1MDU2OH0.kdbi-Va4HvUnUtEoPCaszdfMd4HfR9fdgoNOR7vB2bQ&t=2024-07-30T04%3A42%3A48.983Z',
            link: '/profile',
        },
        {
            title: 'Settings',
            icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/setting-5-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL3NldHRpbmctNS1zdmdyZXBvLWNvbS5wbmciLCJpYXQiOjE3MjIzMTQ2NjMsImV4cCI6MTc1Mzg1MDY2M30.CARuBUoqGvxG5EjaT0ULVlhEz7r9Rq_0US6b9RQ2tPk&t=2024-07-30T04%3A44%3A23.191Z',
            link: '/settings',
        },
    ];

    constructor() { }

    ngOnInit(): void { }

    public toggleMenu(): void {
        this.isOpen = !this.isOpen;
        console.log('Menu state:', this.isOpen);
    }

}