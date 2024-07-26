import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true; // Set loading state to true
      const { email, password } = this.form.getRawValue();

      this.authService.login(email, password).subscribe({
        next: (res) => {
          console.log('LOGIN DONE', res);
          this.isLoading = false; // Reset loading state
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          this.error = 'Login Failed :(';
          this.isLoading = false; // Reset loading state
        },
      });
    }
  }

  createAccount() {
    console.log('Create', this.form.value);
  }

  getRandomStyle() {
    // Random position
    const x = Math.random() * 90; // percentage
    const y = Math.random() * 90; // percentage
    // Random rotation
    const rotate = Math.random() * 360; // degrees
    // Random size between 50px and 150px
    const size = 50 + Math.random() * 100; // between 50px and 150px

    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: `rotate(${rotate}deg)`,
      width: `${size}px`,
      height: `${size}px`
    };
  }
}
