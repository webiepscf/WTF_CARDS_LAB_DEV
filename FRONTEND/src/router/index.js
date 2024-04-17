import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import LoginView from '../views/LoginView.vue'
import BaseLayout from '@/layouts/BaseLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    component: BaseLayout,
    children: [
      {
      path: '',
      name: 'home',
      component: LoginView,
      meta: { layout: 'auth', requiresGuest: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'auth', requiresGuest: true}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { layout: 'auth', requiresGuest: true}
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/MeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    }
  ]
}
  ]
})

// Protection des routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isAuthenticated) {
    next('/login');
  } 
  else if (to.matched.some(record => record.meta.requiresGuest) && authStore.isAuthenticated){
    next('/dashboard');
  }
  else {
    next();
  }
});


export default router
