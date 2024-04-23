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
body {
  font-family: "Roboto", sans-serif;
}
</style>
