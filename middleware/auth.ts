// middleware/auth.js
import { useAuth } from '@/composables/useAuth';
export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // Redirect to the login page
    return navigateTo({
      path: '/auth',
      query: {
        page: 'login',
      },
    });
  }
});
