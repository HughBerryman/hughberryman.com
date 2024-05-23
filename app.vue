<script setup lang="ts">
import "~/assets/0_index.css";
</script>

<template>
  <div class="layout">
    <AppNavigation class="sidenav" />
    <NuxtPage class="main" />
    <AppFooter class="footer" />
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr 60px;
  grid-template-areas:
    "sidenav main"
    "sidenav footer";
  height: 100vh;
  /* overflow: hidden; */
}

.sidenav {
  grid-area: sidenav;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
