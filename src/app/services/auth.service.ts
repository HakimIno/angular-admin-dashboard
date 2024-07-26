import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap, filter, map, Observable, of, take, catchError, switchMap, throwError } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, UrlTree } from '@angular/router';

export interface UserData {
  id: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<UserData | null | undefined> = new BehaviorSubject<UserData | null | undefined>(undefined);
  private USER_STOREGE_KEY = "AUTH_TOKEN";
  private router = inject(Router);
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.loadUser();
  }

  private loadUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.USER_STOREGE_KEY);
      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        const userData: UserData = {
          id: decoded.sub!,
          token
        };
        this.user.next(userData);
      } else {
        this.user.next(null);
      }
    }
    this.isLoadingSubject.next(false);
  }

  login(email: string, password: string): Observable<UserData> {
    this.isLoadingSubject.next(true);
    return this.http.post<{ tokens: { access: string } }>('http://localhost:8888/v1/auth/login', {
      email,
      password
    }).pipe(
      map(res => {
        const { token }: any = res?.tokens?.access;

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem(this.USER_STOREGE_KEY, token);
        }

        const decoded = jwtDecode<JwtPayload>(token);

        const userData: UserData = {
          id: decoded.sub!,
          token
        };
        this.user.next(userData);

        return userData;
      }),
      tap(() => this.isLoadingSubject.next(false)),
      catchError(error => {
        this.isLoadingSubject.next(false);
        console.error('Login error', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }

  signOut() {
    localStorage.removeItem(this.USER_STOREGE_KEY);
    this.user.next(null);
  }

  getCurrentUser() {
    return this.user.asObservable();
  }

  getCurrentUserId() {
    return this.user.getValue()?.id;
  }

  isLoggedIn(): Observable<boolean | UrlTree> {
    return this.isLoading$.pipe(
      switchMap(loading => loading ? of(false) : this.getCurrentUser().pipe(
        take(1),
        map(user => !!user),
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigate(['/']);
          }
        }),
        catchError(() => {
          this.router.navigate(['/']);
          return of(false);
        })
      ))
    );
  }

  shouldLogin(): Observable<boolean | UrlTree> {
    return this.isLoading$.pipe(
      switchMap(loading => loading ? of(false) : this.getCurrentUser().pipe(
        take(1),
        map(user => !!user ? this.router.createUrlTree(['/dashboard']) : true),
        catchError(() => of(this.router.createUrlTree(['/error'])))
      ))
    );
  }

  // Public getter for isLoading observable
  get isLoading$(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }
}
