<template>
  <div class="main-container">
    <h1>Projects</h1>

    <ul role="list" class="projects-container">
      <li v-for="project in projects" class="grid-item">
        <a :href="project.url" target="_blank">
          <NuxtImg :src="project.image" :alt="project.description" />
          <p style="margin-top: 0.5rem">{{ project.category }}</p>
          <h3>
            {{ project.name }}
          </h3></a
        >
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
  TribalPlatform: {
    name: "Tribal Platform",
    category: "Design",
    description: "Tribal Core Platform Experiences",
    image: "/img/projects/tribal/TPlat_thumbnail-mobile-platform.png",
    url: "https://dribbble.com/shots/23337346-Tribal-Platform",
  },
  WaterReportCard: {
    name: "WaterReportCard",
    category: "Design & Dev",
    description: "Access to local water insights",
    image: "/img/projects/liquos/wrc_base-1.png",
    url: "https://dribbble.com/shots/23312673-Water-Report-Card-Web",
  },
  TribalDefi: {
    name: "Tribal Finance (DeFi Crypto)",
    category: "Design",
    description: "A decentralized finance platform for crypto transactions.",
    image: "/img/projects/tribal/TDeFi_Hero.png",
    url: "https://dribbble.com/shots/23337211-Tribal-Finance-DeFi-Crypto",
  },
  TribalCentroDLS: {
    name: "Centro, Design System",
    category: "Design System",
    description: "A comprehensive design system for building consistent UIs.",
    image: "/img/projects/tribal/centro-thumbnail.png",
    url: "https://dribbble.com/shots/23330596-Design-System-Centro",
  },
  Whoin: {
    name: "Whoin",
    category: "Design & Dev",
    description: "Social Community Startup",
    image: "/img/projects/whoin/Auth.png",
    url: "https://dribbble.com/shots/23312639-Whoin",
  },
  TribalReports: {
    name: "Tribal Reports Dash",
    category: "Design",
    description: "A dashboard for generating and viewing business reports.",
    image: "/img/projects/tribal/reports-thumbnail.png",
    url: "https://dribbble.com/shots/23330804-Tribal-Reports",
  },
  TribalMarketing: {
    name: "Tribal Marketing Blog",
    category: "Design",
    description:
      "A blog platform for sharing marketing strategies and insights.",
    image: "/img/projects/tribal/marketing-base-thumbnail.png",
    url: "https://dribbble.com/shots/23323544-Tribal-Marketing-Blog",
  },
  ChillRems: {
    name: "ChillRems",
    category: "Design",
    description: "A relaxation and meditation app designed for stress relief.",
    image: "/img/projects/chillrems-thumbnail.png",
    url: "https://dribbble.com/shots/23312701-ChillRems",
  },
  Piggggy: {
    name: "Piggggy",
    category: "Design",
    description: "A financial management tool for saving and budgeting.",
    image: "/img/projects/pigggy-thumbnail.png",
    url: "https://dribbble.com/shots/23312694-Piggggy",
  },
  ARMLS: {
    name: "ARMLS - Real Estate",
    category: "Design & Dev",
    description: "Real estate platform for Arizona's multiple listing service.",
    image: "/img/projects/armls-thumbnail.png",
    url: "https://dribbble.com/shots/23312685-ARMLS-Real-Estate",
  },
  TribalDesignStrategicJams: {
    name: "Design Team Strategic Jams",
    category: "Design Strategy",
    description: "Collaborative sessions for strategic design initiatives.",
    image: "/img/projects/tribal/ideal-prod-dev-vision.png",
    url: "https://dribbble.com/shots/23312703-Design-Team-Strategic-Jams",
  },
  PikmeUp: {
    name: "PikmeUp",
    category: "Design",
    description: "A ride-sharing application focused on user experience.",
    image: "/img/projects/pikmeup-thumbnail.png",
    url: "https://dribbble.com/shots/23312682-Pikmeup",
  },
};
</script>
