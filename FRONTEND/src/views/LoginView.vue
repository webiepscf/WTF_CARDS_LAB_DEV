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
  <main>
    <form action="" @submit.prevent="login">
      <div>
        <label for="">
          <input type="email" placeholder="Email" v-model="formData.email" />
        </label>
      </div>
      <div>
        <label for="">
          <input
            type="password"
            placeholder="Password"
            v-model="formData.password"
          />
        </label>
      </div>
      <div><input type="submit" value="Login" /></div>
    </form>
  </main>
</template>
