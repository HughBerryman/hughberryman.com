<template>
  <footer>
    <div class="dot" />
    <p>
      Made by <NuxtLink to="/contact"><span>Hugh</span></NuxtLink>
    </p>

    <div class="dot" />
    <a href="https://github.com/HughBerryman/hughberryman.com" target="_blank">
      <p>
        View
        <Icon
          name="ph:github-logo-duotone"
          size="22"
          style="margin-top: -3px"
        />code
        <span> here</span>
      </p>
    </a>
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

p:hover span {
  text-decoration: underline;
}
</style>
