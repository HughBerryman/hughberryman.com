<script setup lang="ts">
const projects = {
  tribalCredit: {
    name: "Tribal Credit",
    category: "Design",
    description: "This is a project description",
    image: "/assets/images/Avatar.png",
  },
  WaterReportCard: {
    name: "WaterReportCard",
    description: "This is a project description",
    image: "/assets/images/Avatar.png",
  },
  SymetraInsurance: {
    name: "Symetra Insurance",
    description: "Sr. Product Designer, Design Systems",
    image: "/assets/images/Avatar.png",
  },
};
</script>

<template>
  <div class="container-style">
    <h1>Projects</h1>

    <ul role="list" class="grid-container">
      <li v-for="project in projects" class="grid-item">
        <img :src="project.image" :alt="project.description" />
        <h3>
          {{ project.name }}
        </h3>
        <p>{{ project.description }}</p>
      </li>
      <img src="/assets/images/Avatar.png" alt="project.description" />
    </ul>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.grid-item {
  /* background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center; */
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
