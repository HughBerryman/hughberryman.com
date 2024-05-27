<template>
  <div class="main-container" style="max-width: 900px">
    <NuxtImg
      src="/img/Avatar-lg.png"
      alt="Hugh Berryman Profile Image"
      class="profile-image"
    />
    <h2>Hey, i'm Hugh.</h2>
    <h1>I design and develop digital experiences.</h1>
    <p>
      I'm a seasoned Product Designer with nearly a decade of experience in
      creating innovative and user-centric designs. Proven track record of
      leading design teams, enhancing collaboration, and driving product success
      through strategic design initiatives. Adept at integrating advanced design
      tools and systems to streamline processes and improve efficiency. Skilled
      in user experience (UX) and user interface (UI) design, prototyping, and
      cross-functional collaboration.
    </p>
    <div class="button-group">
      <NuxtLink to="/projects" class="primary-button">
        View projects
        <div class="primary-icon">
          <Icon name="lucide:arrow-up-right" size="20" />
        </div>
      </NuxtLink>

      <NuxtLink to="/contact" class="secondary-button">
        View projects
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
