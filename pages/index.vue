<template>
  <div class="main-container" style="max-width: 900px">
    <NuxtImg
      src="/img/hugh-working-headshot-crop.jpeg"
      alt="Hugh Berryman Profile Image"
      class="profile-image"
    />
    <h2>Hey, i'm Hugh.</h2>
    <h1>I design and develop digital experiences.</h1>
    <p>
			I’m a Digital Product Designer with nearly a decade of experience crafting user-centered, scalable design systems and intuitive digital products. From leading design teams to consulting on advanced UX/UI projects, I specialize in transforming complex requirements into seamless solutions. With expertise in tools like Figma, Storybook, and design thinking methodologies, I streamline processes, enhance collaboration, and drive measurable outcomes. Whether for short-term contracts or long-term projects, I bring a strategic and adaptable approach to every challenge.
    </p>
    <div class="button-group">
      <NuxtLink to="/projects" class="primary-button">
        View projects
        <div class="primary-icon">
          <Icon name="lucide:arrow-up-right" size="20" />
        </div>
      </NuxtLink>

      <NuxtLink to="/contact" class="secondary-button">
        Get in touch
        <div class="secondary-icon">
          <Icon name="ph:hand-waving-duotone" size="20" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.primary-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  background-color: var(--primary-600);
  color: var(--color-primary-text);
  border: 2px solid transparent;
  font-weight: 500;
  cursor: pointer;
  max-width: 200px;
  padding: 0.5rem 1rem;
}

.primary-button:hover {
  border-color: var(--secondary-200);
}
.primary-button:hover .primary-icon {
  transition: all 0.3s ease;
  rotate: 45deg;
}

.secondary-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  max-width: 200px;

  background-color: var(--color-secondary-bg);
  border: 1px solid var(--color-border-light);
  font-weight: 500;
  color: var(--primary-400);
}

.secondary-button:hover {
  border: 2px solid var(--primary-300);
  color: var(--primary-500);
}

.secondary-button:hover .secondary-icon {
  transition: all 0.3s ease;
  rotate: 45deg;
}

.profile-image {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
