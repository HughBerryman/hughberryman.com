<script setup lang="ts">
const projects = {
  tribalCredit: {
    name: "Tribal Credit",
    category: "Design",
    description: "This is a project description",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  WaterReportCard: {
    name: "WaterReportCard",
    category: "Design & Dev",
    description: "Access to local water insights",
    image: "/img/liquos/wrc_base-1.png",
  },
  SymetraInsurance: {
    name: "Whoin",
    category: "Design & Dev",
    description: "Social Community Startup",
    image: "/img/whoin/Auth.png",
  },
};
</script>

<template>
  <div class="container-style">
    <h1>Projects</h1>

    <ul role="list" class="grid-container">
      <li v-for="project in projects" class="grid-item">
        <NuxtImg :src="project.image" :alt="project.description" />
        <p style="margin-top: 0.5rem">{{ project.category }}</p>
        <h3>
          {{ project.name }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.grid-container {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem; */
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.grid-item {
  transform: scale(1);
  transition: all 0.3s ease;
}

.grid-item:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

img {
  border-radius: var(--t-border-radius);
  width: 300px;
  height: 225px;
  /* object-fit/; */
}

/* .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.grid-item h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.grid-item p {
  margin: 0;
  color: #666;
} */
</style>
