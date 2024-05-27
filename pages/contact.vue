<template>
  <div class="main-container">
    <h1>Contact me</h1>
    <a href="mailto:hugh.g.berryman@gmail.com" target="_blank"
      ><Icon
        name="ph:mailbox-duotone"
        size="36"
        style="color: var(--primary-500)"
      />Hugh.G.Berryman@gmail.com</a
    >
    <a href="https://www.linkedin.com/in/hughberryman" target="_blank"
      ><Icon
        name="ph:linkedin-logo-duotone"
        size="36"
        style="color: var(--primary-500)"
      />/HughBerryman</a
    >
    <a href="https://x.com/hughberryman" target="_blank"
      ><Icon
        name="ph:x-logo-duotone"
        size="36"
        style="color: var(--primary-500)"
      />@HughBerryman</a
    >
    <h2 style="margin-top: 1rem">Book a time via the following link</h2>
    <a href="https://calendly.com/hughberryman/30" target="_blank"
      ><Icon
        name="ph:calendar-duotone"
        size="36"
        style="color: var(--primary-500)"
      />Schedule a meeting instantly
    </a>

    <a href="https://calendly.com/hughberryman/30" target="_blank"
      ><div class="containerBox">
        <NuxtImg
          src="/img/calendly.png"
          alt="Book a time with hugh via Calendly"
          class="booking img-responsive"
        /></div
    ></a>
  </div>
</template>

<style scoped>
.icon {
  margin-right: 0.5rem;
}

a {
  color: var(--primary-500);
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
.containerBox {
  display: inline-block;
  width: 100%;
  max-width: 700px;
}

.text-box {
  position: relative;
  top: 100px;
  left: 100px;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-600);
  z-index: 20;
}

.booking {
  z-index: 10;
  border: 1px solid var(--primary-100);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>
