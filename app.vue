<script setup lang="ts">
import "~/assets/0_index.css";
</script>

<template>
  <div class="layout">
    <AppNavigation class="sidebar" />
    <div class="main-content">
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  /* display: flex; */
}

.sidebar {
  grid-row: span 2;
}

.main-content {
  /* display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between; */
  display: grid;
  grid-template-rows: 1fr auto;
  /* display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto; */
}

.main-content > * {
  /* grid-row: 1; */
}

.main-content > AppFooter {
  /* grid-row: 2; */
}
</style>
