<template>
  <div class="container-style">
    <NuxtImg
      src="/img/Avatar.png"
      alt="Hugh Berryman Profile Image"
      class="profile-image"
    />
    <h2>Hugh Berryman, Sr. Product Designer</h2>
    <h1>Building digital products & experiences.</h1>
    <p>
      I enjoy crafting digital experiences. Always aiming to keep designs
      simple, elegant, and understandable.
    </p>
    <div class="button-group">
      <button class="primary">View Resume</button>
      <button class="secondary">Get in touch</button>
    </div>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.button-group > * {
  flex: 1;
  min-width: fit-content;
}
</style>
