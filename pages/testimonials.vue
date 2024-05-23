<template>
  <div class="main-container">
    <h1>Testimonials</h1>

    <ul role="list" class="grid-container">
      <li v-for="testimonial in testimonials" class="testimonial-card">
        <div style="display: flex">
          <NuxtImg
            :src="testimonial.image"
            :alt="testimonial.name"
            class="profile-image"
          />
          <div
            style="
              margin-left: 0.5rem;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <h3 class="name">
              {{ testimonial.name }}
            </h3>
            <p class="job-title">{{ testimonial.jobTitle }}</p>
            <p class="company">{{ testimonial.company }}</p>
          </div>
        </div>
        <p class="testimonial">{{ testimonial.recommendation }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.testimonial-card {
  background-color: #fff;
  border-radius: 16px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  padding: 2rem;
  border: 1px solid var(--primary-100);
  max-width: 350px;
  /* margin: 20px; */
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.profile-image {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.name {
  /* font-size: 1.5rem; */
  /* font-weight: bold;
  margin-bottom: 5px; */
  /* text-overflow: ellipsis;
  line-clamp: 1;
  word-wrap: break-word; */
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
}

.job-title,
.company {
}

.testimonial {
  justify-content: start;
  align-items: start;
  text-align: start;
}
</style>

<script setup lang="ts">
const testimonials = {
  amrShady: {
    name: "Amr Shady",
    image: "/img/headshots/amr-headshot.jpeg",
    jobTitle: "CEO",
    company: "Tribal Credit",
    recommendation:
      "Hugh's design leadership and strategic vision have significantly enhanced our products, driving tangible business results and elevating user experience to new levels.",
  },
  ethanMillstein: {
    name: "Ethan Millstein",
    image: "/img/headshots/ethan-headshot.jpeg",
    jobTitle: "Mobile Eng Manager",
    company: "Tribal Credit",
    recommendation:
      "Hugh's ability to synergize design and engineering perspectives has greatly enhanced our mobile projects. His insights and cooperative approach have been instrumental in driving innovation and achieving our shared goals.",
  },
  mohamedAbouHussein: {
    name: "Mohamed AbouHussein",
    image: "/img/headshots/mo-headshot.jpeg",
    jobTitle: "Director of Product",
    company: "Tribal Credit",
    recommendation:
      "Hugh excels in user-centric design and cross-team partnership. His attention to detail and collaborative modalities have been pivotal in advancing our product and success.",
  },
  alhassanSedky: {
    name: "Alhassan Sedky",
    image: "/img/headshots/alhassan-headshot.jpeg",
    jobTitle: "Sr. Product Manager",
    company: "Tribal Credit",
    recommendation:
      "Hugh's design support has significantly contributed to our product management success. His human centered, solutions-oriented approach has improved our team's cohesion and output.",
  },
  yehorMamchits: {
    name: "Yehor Mamchits",
    image: "/img/headshots/yehor-headshot.jpeg",
    jobTitle: "Sr. Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh has led our design team to excellence, innovating with a deep commitment to quality and design thinking.",
  },
  mateusPienta: {
    name: "Mateus Pienta",
    image: "/img/headshots/mateus-headshot.jpeg",
    jobTitle: "Sr. Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh helps our team shine! His thoughtful and caring actions as the team's lead enable us to thrive by delivering our best work while cultivating and nurturing our personal lives.",
  },
  emilianoCarrillo: {
    name: "Emiliano Carrillo",
    image: "/img/headshots/emi-headshot.jpeg",
    jobTitle: "Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh's mentorship was crucial in my growth from Junior to Product Designer. His support and belief in my potential have truly shaped my career development.",
  },
  nathaliaMartinez: {
    name: "Nathalia Martinez",
    image: "/img/headshots/nath-headshot.jpeg",
    jobTitle: "Jr. Product Designer",
    company: "Tribal Credit",
    recommendation:
      "As a Junior Designer, Hugh's belief in my abilities and his support of my growth have helped me become better as a designer. Grateful to have him be my lead.",
  },
};
</script>
