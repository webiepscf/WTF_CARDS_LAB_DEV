import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useAuthStore = defineStore('auth', () => {
    // Initialiser isAuthenticated à partir de localStorage
    let isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');

    async function login(credentials) {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.post("/api/login", credentials);
      if (response.status === 200) {
        isAuthenticated.value = true;
        localStorage.setItem('isAuthenticated', 'true');  // Sauvegarder l'état dans localStorage
        router.push({ name: "dashboard" });
      }
    }
    
    async function logout() {
      await axios.post("/api/logout");
      isAuthenticated.value = false;
      localStorage.setItem('isAuthenticated', 'false');  // Mettre à jour l'état dans localStorage
      router.push({ name: "login" });
    }

    async function register(details) {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.post("/api/register", details);
      if (response.status === 201 || response.status === 204) {
        isAuthenticated.value = true;
        localStorage.setItem('isAuthenticated', 'true');  // Sauvegarder l'état dans localStorage
        router.push({ name: "dashboard" });
      }
    }

    return { isAuthenticated, login, logout, register };
});
