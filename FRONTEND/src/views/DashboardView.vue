<script setup>
import { reactive } from "vue";

const theme_params = reactive({
  color: "#ec4899",
  font: "Lobster, cursive",
});
</script>

<template>
  <div>
    <!-- Carte de l'item -->
    <article class="relative flex flex-cols w-full rounded-lg overflow-hidden">
      <div class="flex-grow md:flex">
        <!-- Image -->
        <div class="md:order-2 md:w-1/2">
          <img
            src="@/assets/wtf_pets/dog1.webp"
            class="w-full h-full object-cover"
            alt="AbyssalRevenant"
          />
        </div>

        <!-- Monster Details -->
        <div
          class="text-gray-200 md:static md:order-1 p-12 w-full md:w-1/2 pb-24 p-12 text-xl"
        >
          <h3
            class="text-white text-5xl font-bold"
            :style="{ fontFamily: theme_params.font }"
          >
            WTF Pets
          </h3>
          <div class="text-sm text-gray-300 mb-4">
            <span class="text-white">Mars 2024</span> - proposé par
            <a href="#">Alex Smith</a>
          </div>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, totam
            esse facilis atque, magnam odio dolor blanditiis at consectetur
            dolorum fugiat. Eveniet qui, tempora culpa saepe aut numquam
            adipisci est.
          </p>
          <p class="my-4">
            Adipisci ipsam distinctio sed qui repellat provident tempore tempora
            possimus, dolore facilis id. Mollitia ipsa exercitationem ex aliquid
            et totam similique qui unde provident a rem, saepe ipsam minima
            explicabo?
          </p>
          <p class="text-white text-3xl">Bonne chance à tou.te.s</p>
        </div>
      </div>
    </article>
  </div>
</template>
