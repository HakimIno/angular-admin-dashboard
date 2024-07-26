import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { NavigationError, provideRouter, RedirectCommand, Router, withComponentInputBinding, withNavigationErrorHandler, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export function handleNavError(error: NavigationError) {
  const router = inject(Router);
  const urlTree = router.parseUrl('/error')
  return new RedirectCommand(urlTree, {
    state: {
      error
    }
  })
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(
    routes,
    withComponentInputBinding(),
    withViewTransitions(),
    withNavigationErrorHandler(handleNavError),
  ),
  provideClientHydration(),
  provideHttpClient(),],


};
