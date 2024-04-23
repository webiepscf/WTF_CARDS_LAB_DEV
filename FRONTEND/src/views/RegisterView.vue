<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const formData = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const authStore = useAuthStore();

const register = async () => {
  await authStore.register(formData.value);
};
</script>
<template>
  <div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label>
          <input
            type="text"
            placeholder="Alex Smith"
            required
            v-model="formData.name"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="email"
            placeholder="alex.smith@gmail.com"
            required
            v-model="formData.email"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            required
            v-model="formData.password"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            required
            v-model="formData.password_confirmation"
            class="px-4 py-1 w-full rounded bg-gray-600"
          />
        </label>
      </div>
      <div>
        <input
          type="submit"
          class="px-4 py-1 bg-emerald-600 hover:bg-emerald-700 rounded w-full"
          value="S'enregistrer"
        />
      </div>
    </form>
    <div class="mt-8">
      <RouterLink
        to="/login"
        class="hover:underline text-gray-200 hover:text-gray-50"
        >Se sonnecter</RouterLink
      >
    </div>
  </div>
</template>
