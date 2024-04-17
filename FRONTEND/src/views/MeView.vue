<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore(); // Utilisez le store
const user = ref(null);

onMounted(async () => {
  await userStore.getUser();
  user.value = userStore.user;
});
</script>

<template>
  <main>
    <div v-if="user">{{ user.name }}</div>
    <div v-else>Chargement...</div>
  </main>
</template>
