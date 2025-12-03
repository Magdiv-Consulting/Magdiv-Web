<template>
  <div id="app">
    <!-- Global Navbar -->
    <Header />

    <!-- Main Content -->
    <main class="page-wrapper">
      <router-view />
    </main>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/layout/header.vue";
import Footer from "./components/layout/footer.vue";
</script>

<style>
/* Ensures consistent spacing */
.page-wrapper {
  padding-top: 0;
  min-height: 70vh;
}

/* Global resets */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
