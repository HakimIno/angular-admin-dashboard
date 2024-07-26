import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp?: number;
}
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  return new Promise<boolean>((resolve) => {
    if (isPlatformBrowser(platformId)) {
      const token = localStorage.getItem("AUTH_TOKEN");

      if (token) {
        try {
          const decoded = jwtDecode<JwtPayload>(token);
          const currentTime = Math.floor(Date.now() / 1000);

          if (decoded.exp && decoded.exp > currentTime) {
            // Access 'requiresAuth' using bracket notation
            if (route.data && route.data['requiresAuth'] === false) {
              router.navigateByUrl("/dashboard");
              resolve(false);
            } else {
              resolve(true);
            }
          } else {
            localStorage.removeItem("AUTH_TOKEN");
            if (route.data && route.data['requiresAuth'] === true) {
              router.navigateByUrl("/login");
              resolve(false);
            } else {
              resolve(true);
            }
          }
        } catch (error) {
          console.error("Invalid token", error);
          localStorage.removeItem("AUTH_TOKEN");
          if (route.data && route.data['requiresAuth'] === true) {
            router.navigateByUrl("/login");
            resolve(false);
          } else {
            resolve(true);
          }
        }
      } else {
        if (route.data && route.data['requiresAuth'] === true) {
          router.navigateByUrl("/login");
          resolve(false);
        } else {
          resolve(true);
        }
      }
    } else {
      resolve(false);
    }
  });
};


// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { map, take, tap, catchError, switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { AuthService } from '../services/auth.service';


// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   return authService.isLoading$.pipe(
//     take(1), // Take only the first value to avoid multiple emissions
//     switchMap(loading => {
//       if (loading) {
//         return of(false); // If loading, block navigation
//       }
//       return authService.getCurrentUser().pipe(
//         take(1),
//         map(user => !!user), // Check if user is authenticated
//         tap(isLoggedIn => {
//           if (!isLoggedIn) {
//             router.navigate(['/']);
//           }
//         }),
//         catchError(() => {
//           router.navigate(['/']);
//           return of(false);
//         })
//       );
//     })
//   );
// };

// export const noAuthGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   return authService.isLoading$.pipe(
//     take(1), // Take only the first value to avoid multiple emissions
//     switchMap(loading => {
//       if (loading) {
//         return of(false); // If loading, block navigation
//       }
//       return authService.getCurrentUser().pipe(
//         take(1),
//         map(user => !user), // Check if user is not authenticated
//         tap(isNotLoggedIn => {
//           if (!isNotLoggedIn) {
//             router.navigate(['/dashboard']);
//           }
//         }),
//         catchError(() => {
//           router.navigate(['/']);
//           return of(false);
//         })
//       );
//     })
//   );
// };