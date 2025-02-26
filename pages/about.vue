<template>
  <div class="main-container">
    <h1>View & Download Resume</h1>
    <div
      class="button-group"
      style="
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;
        max-width: fit-content;
      "
    >
      <!-- href="/resume/Hugh-Berryman-Resume-2024.pdf" -->
      <a
        href="/resume/Hugh-Berryman-Resume-2024.pdf"
        download
        target="_blank"
        class="download-link button-group"
      >
        <button class="primary">
          As PDF
          <div class="primary-icon" style="rotate: 0deg">
            <Icon
              name="ph:file-pdf-duotone"
              size="20"
              style="margin-top: 3px"
            />
          </div>
        </button>
      </a>
      <!-- href="/resume/Hugh-Berryman-Resume-2024.docx" -->
      <a
        href="/resume/Hugh-Berryman-Resume-2024.docx"
        download
        target="_blank"
        class="download-link button-group"
      >
        <button class="secondary">
          As Word Version
          <div class="secondary-icon" style="rotate: 0deg">
            <Icon
              name="ph:microsoft-word-logo-duotone"
              size="22"
              style="margin-top: -3px"
            />
          </div>
        </button>
      </a>
    </div>

    <NuxtImg
      src="/resume/Hugh-Berryman-Resume-2024.svg"
      alt="Hugh Berryman Resume"
      class="resume"
    />
  </div>
</template>

<style scoped>
.download-link {
  /* padding: 0.5rem 1rem; */
}

.resume {
  border-radius: var(--dsaas-border-radius);
  border: 1px solid var(--primary-100);
}

.resume:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
