<script setup>
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore(); // Utilisez le store

const logout = async () => {
  await authStore.logout();
};
</script>

<template>
  <main>
    <h1>Logout View</h1>
    <div><a href="#" @click.prevent="logout">Logout</a></div>
  </main>
</template>
