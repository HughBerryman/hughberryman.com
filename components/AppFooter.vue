<template>
  <footer>
    <div class="dot" />
    <p>Made by <span>Hugh</span></p>
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
