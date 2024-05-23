<script setup lang="ts">
import "~/assets/0_index.css";
</script>

<template>
  <div class="layout">
    <NuxtImg
      src="/Blur.png"
      alt="Background Image with Blur for effect"
      class="bkg-img"
    />
    <AppNavigation class="sidenav" />
    <NuxtPage class="main" />
    <AppFooter class="footer" />
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr 80px;
  grid-template-areas:
    "sidenav main"
    "sidenav footer";
  height: 100vh;
}

.sidenav {
  grid-area: sidenav;
}

.main {
  grid-area: main;
  overscroll-behavior-x: none;
  overscroll-behavior: none;
}

.footer {
  grid-area: footer;
  border-top: 1px solid var(--primary-100);
}

.bkg-img {
  position: fixed;
  top: 0;
  left: 45%;
  z-index: -1;
  width: 60%;
  height: 60%;
}
</style>
