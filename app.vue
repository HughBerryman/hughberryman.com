<script setup lang="ts">
import "~/assets/styles.css";
</script>

<template>
  <div class="layout">
    <AppNavigation />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
</style>
