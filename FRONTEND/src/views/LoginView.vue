<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const formData = ref({
  email: "",
  password: "",
});

const authStore = useAuthStore(); // Utilisez le store

const login = async () => {
  await authStore.login(formData.value);
};
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="">
          <input
            type="email"
            placeholder="alex.doe@gmail.com"
            v-model="formData.email"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div class="mb-3">
        <label for="">
          <input
            type="password"
            placeholder="●●●●●●●●"
            v-model="formData.password"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div>
        <input
          type="submit"
          value="Se connecter"
          class="px-4 py-1 bg-emerald-600 hover:bg-emerald-700 rounded w-full"
        />
      </div>
    </form>
    <div class="mt-8">
      <RouterLink
        to="/register"
        class="hover:underline text-gray-200 hover:text-gray-50"
        >S'enregistrer</RouterLink
      >
    </div>
  </div>
</template>
