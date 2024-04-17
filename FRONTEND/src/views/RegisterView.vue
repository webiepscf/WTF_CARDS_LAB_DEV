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
  <main>
    <h1>Register View</h1>
    <form @submit.prevent="register">
      <div>
        <label>
          <input
            type="text"
            placeholder="Alex Smith"
            required
            v-model="formData.name"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="email"
            placeholder="alex.smith@gmail.com"
            required
            v-model="formData.email"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="password"
            placeholder="Your password"
            required
            v-model="formData.password"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="password"
            placeholder="Confirm password"
            required
            v-model="formData.password_confirmation"
          />
        </label>
      </div>
      <div><input type="submit" /></div>
    </form>
  </main>
</template>
