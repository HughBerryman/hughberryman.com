<template>
  <div class="main-container">
    <h1>View & Download Resume</h1>
    <!-- <p>
      Product Designer with ten years of experience specializing in B2B, B2C
      solutions.
    </p> -->

    <div
      style="display: flex; gap: 0.5rem; margin-bottom: 2rem"
      class="button-group"
    >
      <button class="primary">
        As PDF
        <div class="primary-icon" style="rotate: 0deg">
          <Icon name="ph:file-pdf-duotone" size="20" style="margin-top: 3px" />
        </div></button
      ><button class="secondary">
        As Word Version
        <div class="secondary-icon" style="rotate: 0deg">
          <Icon
            name="ph:microsoft-word-logo-duotone"
            size="22"
            style="margin-top: -3px"
          />
        </div>
      </button>
    </div>

    <NuxtImg
      src="/img/Hugh-Berryman-Resume-2024.svg"
      alt="Hugh Berryman Resume"
      class="resume"
    />
    <!-- <p>
      Hugh is a seasoned digital product designer, with over eight years of
      experience in the field. He has a rich work history, having contributed to
      the success of both small startups and large corporations. Hugh's
      specialization lies in crafting user-friendly interfaces for web and
      mobile applications. His forte is creating user experiences that are not
      only intuitive but also effectively align with business goals.
      <br />
      <br />
      Hugh strongly advocates for user-centered design, constantly seeking ways
      to enhance the overall user experience. He thrives on collaboration and
      finds joy in working alongside developers, product managers, and fellow
      designers.
      <br />
      <br />
      Hugh excels at tackling complex design challenges and is a natural problem
      solver. His ultimate aspiration is to design products that simplify and
      enhance people's lives. Hugh also harnesses the power of no-code tools to
      bridge the gap between design and implementation, transforming concepts
      into functional applications without traditional coding. His proficiency
      with various no-code platforms enables him to swiftly prototype, iterate,
      and build applications that truly resonate with users.
    </p> -->
  </div>
</template>

<style scoped>
.resume {
  border-radius: var(--dsaas-border-radius);
  border: 1px solid var(--primary-100);
}

.resume:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
