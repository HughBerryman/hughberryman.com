<script setup lang="ts">
import "~/assets/0_index.css";
const showSideNav = ref(false);
</script>

<template>
  <div class="layout">
    <NuxtImg
      src="/Blur.png"
      alt="Background Image with Blur for effect"
      class="bkg-img"
    />
    <header class="header">
      <!-- <NuxtLink to="/">
        <h3>Hugh Berryman</h3>
        <p>Sr. Product Designer</p>
      </NuxtLink> -->
      <div />

      <Icon
        name="ph:list-duotone"
        size="24"
        class="hamburger-icon"
        @click="showSideNav = !showSideNav"
      />
    </header>
    <AppNavigation class="sideNav" :class="{ showSidebar: showSideNav }" />
    <NuxtPage class="main" />
    <AppFooter class="footer" />
  </div>
</template>

<style>
.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #fff;
  border-bottom: 1px solid var(--primary-100);
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 280px 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas:
      "sidenav main"
      "sidenav footer";
  }
  .header {
    display: none;
  }
  .sidenav {
    grid-area: sidenav;
  }
  .nav {
    display: block;
  }
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

.hamburger-icon:hover {
  color: var(--primary-400);
}

.hamburger-icon:active {
  color: var(--primary-800);
}
</style>
