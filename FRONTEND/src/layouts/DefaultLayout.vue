<template>
  <div>
    <header>
      <h1>Default Layout</h1>
      <div class="wrapper">
        <nav>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/me">Me</RouterLink>
          <RouterLink to="/logout">Logout</RouterLink>
        </nav>
      </div>
      <hr />
    </header>
    <main>
      <!-- Contenu principal -->
      <slot></slot>
    </main>
    <footer>
      <hr />
      &copy;EAFC 2024
    </footer>
  </div>
</template>

<style scoped></style>
