<template>
  <div class="main-container">
    <h1>Projects</h1>

    <ul role="list" class="projects-container">
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
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.grid-item {
  transition: all 0.3s ease;
}

.grid-item:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

img {
  border-radius: var(--dsaas-border-radius);
  width: 300px;
  height: 225px;
}
</style>

<script setup lang="ts">
const projects = {
  // Symetra: {},
  WaterReportCard: {
    name: "WaterReportCard",
    category: "Design & Dev",
    description: "Access to local water insights",
    image: "/img/liquos/wrc_base-1.png",
  },
  Whoin: {
    name: "Whoin",
    category: "Design & Dev",
    description: "Social Community Startup",
    image: "/img/whoin/Auth.png",
  },
  TribalDashboard: {
    name: "Tribal Credit",
    category: "Design",
    description: "Tribal Core Platform Experiences",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  TribalDesignStrategicJams: {
    name: "Design Team Strategic Jams",
    category: "Design Strategy",
    description: "Collaborative sessions for strategic design initiatives.",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  TribalMarketing: {
    name: "Tribal Marketing Blog",
    category: "Design",
    description:
      "A blog platform for sharing marketing strategies and insights.",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  TribalReports: {
    name: "Tribal Reports Dash",
    category: "Design",
    description: "A dashboard for generating and viewing business reports.",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  TribalCentroDLS: {
    name: "Centro, Design System",
    category: "Design System",
    description: "A comprehensive design system for building consistent UIs.",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  TribalDefi: {
    name: "Tribal Finance (DeFi Crypto)",
    category: "Design",
    description: "A decentralized finance platform for crypto transactions.",
    image: "/img/tribal/TPlat_thumbnail-mobile-platform.png",
  },
  PikmeUp: {
    name: "PikmeUp",
    category: "Design",
    description: "A ride-sharing application focused on user experience.",
    image: "/img/whoin/Auth.png",
  },
  ARMLS: {
    name: "ARMLS - Real Estate",
    category: "Design & Dev",
    description: "Real estate platform for Arizona's multiple listing service.",
    image: "/img/whoin/Auth.png",
  },
  Piggggy: {
    name: "Piggggy",
    category: "Design",
    description: "A financial management tool for saving and budgeting.",
    image: "/img/whoin/Auth.png",
  },
  ChillRems: {
    name: "ChillRems",
    category: "Design",
    description: "A relaxation and meditation app designed for stress relief.",
    image: "/img/whoin/Auth.png",
  },
};
</script>
