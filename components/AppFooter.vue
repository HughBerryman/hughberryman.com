<template>
  <footer>
    <div class="dot" />
    <p>Made by <NuxtLink to="/contact">Hugh</NuxtLink></p>

    <div class="dot" />
    <p>View my code <span>here</span></p>
    <div
      style="
        padding: 0.25rem;
        background-color: var(--primary-50);
        border-radius: 100%;
      "
    >
      <Icon name="ph:github-logo-duotone" size="22" style="margin-top: -3px" />
    </div>
    <div class="dot" />
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  display: inline-flex;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: var(--primary-200);
}

span {
  color: var(--primary-700);
}
</style>
