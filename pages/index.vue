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
        Get in touch
        <div class="secondary-icon">
          <Icon
            name="ph:hand-waving-duotone"
            size="22"
            style="margin-top: -3px"
          />
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

</style>
