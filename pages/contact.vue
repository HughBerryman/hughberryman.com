<template>
  <div class="main-container">
    <h1>Contact me</h1>
    <a href="mailto:hugh.g.berryman@gmail.com"
      ><Icon
        name="ph:mailbox-duotone"
        size="36"
        style="color: var(--primary-500)"
      />Hugh.G.Berryman@gmail.com</a
    >
    <a href="https://www.linkedin.com/in/hughberryman"
      ><Icon
        name="ph:linkedin-logo-duotone"
        size="36"
        style="color: var(--primary-500)"
      />/HughBerryman</a
    >
    <a href="https://x.com/hughberryman"
      ><Icon
        name="ph:x-logo-duotone"
        size="36"
        style="color: var(--primary-500)"
      />@HughBerryman</a
    >
    <h2>Or book a time below to chat</h2>
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/hughberryman/30?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=818ca8"
      style="min-width: 320px; height: 700px"
    ></div>
    <Icon
      name="svg-spinners:pulse-multiple"
      size="120"
      v-if="loading"
      style="color: var(--primary-500)"
    />
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.provide("hello", (name: string) => `Hello ${name}!`);

nuxtApp.hook("page:start", () => {
  loading.value = true;
  console.log("loading", loading.value);
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  console.log("loading finished", loading.value);
});
</script>

<style scoped>
.icon {
  margin-right: 0.5rem;
}

a {
  color: var(--primary-600);
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
  /* color: var(--primary-200); */
}
</style>

<!-- <script setup lang="ts">
src="https://assets.calendly.com/assets/external/widget.js" async>
</script> -->

<!-- 
<script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
></script> -->
