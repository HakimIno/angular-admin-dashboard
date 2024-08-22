import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl("/")
  }


  public users: any = [
    {
      name: 'Jane D',
      position: 'CEO',
      avatar: 'https://jgyazpmncibkucygwvuq.supabase.co/storage/v1/object/sign/icon/logout-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29uL2xvZ291dC1zdmdyZXBvLWNvbS5wbmciLCJpYXQiOjE3MjE5ODA1MjUsImV4cCI6MTc1MzUxNjUyNX0.lKaKmvJCwJhM4EziX6a5vUmyMMU4DRi6nk6QogzFajY&t=2024-07-26T07%3A55%3A25.541Z',
      comment: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.'
    },
    {
      name: 'Kim D',
      position: 'CEO',
      avatar: 'https://pagedone.io/asset/uploads/1695365794.png',
      comment: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.'
    },
    {
      name: 'Snow D',
      position: 'CEO',
      avatar: 'https://pagedone.io/asset/uploads/1695365794.png',
      comment: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.'
    },
    {
      name: 'Home D',
      position: 'CEO',
      avatar: 'https://pagedone.io/asset/uploads/1695365794.png',
      comment: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.'
    },
  ];
}
