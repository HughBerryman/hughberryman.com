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
      <button class="primary">
        View projects
        <div class="primary-icon">
          <Icon
            name="lucide:arrow-up-right"
            size="20"
            style="margin-top: 3px"
          />
        </div>
      </button>

      <button class="secondary">
        <p>Get in touch</p>
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
  object-fit: cover;
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

.secondary {
  position: relative;
}

.secondary::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px; /* Thickness of the underline */
  bottom: 0;
  left: 0;
  background-color: var(--primary-300);
  visibility: hidden; /* Hide initially */
  transition: all 0.3s ease;
}

.secondary:hover::before {
  visibility: visible; /* Show on hover */
  width: 100%; /* Animate to full width */
}

.secondary-icon {
  color: var(--primary-400);
}
</style>
