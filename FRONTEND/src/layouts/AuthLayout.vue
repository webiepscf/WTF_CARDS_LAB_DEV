<template>
  <div
    class="text-center text-white font-sans flex w-screen h-screen justify-center items-center gap-4 text-sm"
    style="
      background: rgb(181, 223, 85);
      background: radial-gradient(
        circle,
        rgba(181, 223, 85, 1) 0%,
        rgba(0, 100, 167, 1) 100%
      );
    "
  >
    <div>
      <div class="mb-8">
        <img
          src="@/assets/wtf_logo.png"
          alt="WTF Cards Logo"
          class="h-28 inline opacity-90"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>
