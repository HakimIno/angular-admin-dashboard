import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
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
}
