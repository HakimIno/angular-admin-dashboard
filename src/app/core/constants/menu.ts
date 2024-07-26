import { MenuItem } from '../models/menu.model';

export class Menu {
    public static pages: MenuItem[] = [
        {
            group: 'Base',
            separator: false,
            items: [
                {
                    icon: "https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/chart-mixed-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2NoYXJ0LW1peGVkLXN2Z3JlcG8tY29tLnBuZyIsImlhdCI6MTcyMTk3NTkxMSwiZXhwIjoxNzUzNTExOTExfQ.uXomF6KBCQO1l0KNBj3AuLV23fYWIA7SkqFpIDlp1Yo&t=2024-07-26T06%3A38%3A31.158Z",
                    label: 'Dashboard',
                    route: '/dashboard',
                    children: [
                        { label: 'Nfts', route: '/dashboard/nfts' },
                        // { label: 'Podcast', route: '/dashboard/podcast' },
                    ],
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/lock-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2xvY2stc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzIxOTc2MTIyLCJleHAiOjE3NTM1MTIxMjJ9.Xqo31o5DouqVNr1yImPLy5xVEZGaomluoywBhUlG9F0&t=2024-07-26T06%3A42%3A02.603Z',
                    label: 'Auth',
                    route: '/auth',
                    children: [
                        { label: 'Sign up', route: '/auth/sign-up' },
                        { label: 'Sign in', route: '/auth/sign-in' },
                        { label: 'Forgot Password', route: '/auth/forgot-password' },
                        { label: 'New Password', route: '/auth/new-password' },
                        { label: 'Two Steps', route: '/auth/two-steps' },
                    ],
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/comment-smile-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2NvbW1lbnQtc21pbGUtc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzIxOTc2ODQwLCJleHAiOjE3NTM1MTI4NDB9.IHy8c4zy7-SU6YOSqknSf4SLXABKfJUQqfHSfrWOIIo&t=2024-07-26T06%3A54%3A00.629Z',
                    label: 'Erros',
                    route: '/errors',
                    children: [
                        { label: '404', route: '/errors/404' },
                        { label: '500', route: '/errors/500' },
                    ],
                },
            ],
        },
        {
            group: 'Collaboration',
            separator: true,
            items: [
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/download-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2Rvd25sb2FkLXN2Z3JlcG8tY29tLnBuZyIsImlhdCI6MTcyMTk3NzQxMywiZXhwIjoxNzUzNTEzNDEzfQ.mDogU_VyEbvu6SF7DDbMDFzTPRtCpotBfA2Q8AMjhoQ&t=2024-07-26T07%3A03%3A33.189Z',
                    label: 'Download',
                    route: '/download',
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/gift-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2dpZnQtc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzIxOTc4MTkwLCJleHAiOjE3NTM1MTQxOTB9.faUc666Bk_WojCDslxtydI3_JS6tWgmHSOg19CnZL2o&t=2024-07-26T07%3A16%3A30.521Z',
                    label: 'Gift Card',
                    route: '/gift',
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/users-3-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL3VzZXJzLTMtc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzIxOTc4MzMxLCJleHAiOjE3NTM1MTQzMzF9.bOL_AnPgESEFckcidBLw_zziXY4dng1h2djn06iOU48&t=2024-07-26T07%3A18%3A51.492Z',
                    label: 'Users',
                    route: '/users',
                },
            ],
        },
        {
            group: 'Config',
            separator: false,
            items: [
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/setting-5-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL3NldHRpbmctNS1zdmdyZXBvLWNvbS5wbmciLCJpYXQiOjE3MjE5Nzg0MzcsImV4cCI6MTc1MzUxNDQzN30.6X8oglaPZWrrWRCijo-t3HKQ4hIqRhtCefHQch93pQc&t=2024-07-26T07%3A20%3A37.890Z',
                    label: 'Settings',
                    route: '/settings',
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/notification-13-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL25vdGlmaWNhdGlvbi0xMy1zdmdyZXBvLWNvbS5wbmciLCJpYXQiOjE3MjE5Nzg1MzEsImV4cCI6MTc1MzUxNDUzMX0.TSB4Ly-XCSYlp7NKTezl2gFZPQrw1O95Hr3IkC6AW4I&t=2024-07-26T07%3A22%3A11.834Z',
                    label: 'Notifications',
                    route: '/gift',
                },
                {
                    icon: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/folders-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2ZvbGRlcnMtc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzIxOTc4NTkyLCJleHAiOjE3NTM1MTQ1OTJ9.Mog3-3MyskmDB8UVYUqOhwQt4TY_Sh9BcS-RPP-5S_8&t=2024-07-26T07%3A23%3A12.853Z',
                    label: 'Folders',
                    route: '/folders',
                    children: [
                        { label: 'Current Files', route: '/folders/current-files' },
                        { label: 'Downloads', route: '/folders/download' },
                        { label: 'Trash', route: '/folders/trash' },
                    ],
                },
            ],
        },
    ];
}