<template>
  <div class="container-style">
    <NuxtImg
      src="/img/Avatar-lg.png"
      alt="Hugh Berryman Profile Image"
      class="profile-image"
    />
    <h2>Welcome!</h2>
    <h1>Building digital products & experiences.</h1>
    <p>
      I enjoy crafting digital experiences. Always aiming to keep designs
      simple, elegant, and understandable.
    </p>
    <div class="button-group">
      <button class="primary">
        View resume
        <div class="primary-icon">
          <Icon
            name="lucide:arrow-up-right"
            size="20"
            style="margin-top: 3px"
          />
        </div>
      </button>
      <button class="secondary">
        Get in touch
        <div class="secondary-icon">
          <Icon name="lucide:contact" size="22" style="margin-top: -3px" />
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.profile-image {
  border-radius: 100%;
  width: 100px;
  height: 100px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.button-group > * {
  flex: 1;
  min-width: fit-content;
}

button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.primary:hover .primary-icon {
  transition: all 0.3s ease;
  rotate: 45deg;
}

.primary-icon {
  background-color: var(--primary-500);
  border-radius: 100%;
  width: 2rem;
  height: 2rem;

  transition: all 0.3s ease;
}
.secondary-icon {
  color: var(--primary-400);
}
</style>
