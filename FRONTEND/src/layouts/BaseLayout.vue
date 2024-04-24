<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Correspondance des types de layouts aux composants
const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
};

const layoutComponent = computed(() => {
  return layouts[useRoute().meta.layout || "default"];
});
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
</style>
