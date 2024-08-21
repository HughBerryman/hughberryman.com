<template>
  <div class="main-container">
    <h1>Testimonials</h1>

    <ul role="list" class="testimonial-container">
      <li v-for="testimonial in testimonials" class="testimonial-card">
        <div style="display: flex">
          <a :href="testimonial.linkedInProfile" target="_blank">
            <NuxtImg
              :src="testimonial.image"
              :alt="testimonial.name"
              class="profile-image"
          /></a>
          <div
            style="
              margin-left: 0.5rem;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <a :href="testimonial.linkedInProfile" target="_blank">
              <h3 class="name">
                {{ testimonial.name }}
              </h3>
              <h4 class="job-title">{{ testimonial.jobTitle }}</h4>
              <h4 class="company">{{ testimonial.company }}</h4>
            </a>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/hughberryman#recommendations"
          target="_blank"
          class="linkedinVerified"
          v-if="testimonial.linkedInVerifiedRec"
          title="Scroll down to Recommendations section"
        >
          <Icon name="ic:twotone-verified-user" size="24" />
          <p>Verified LinkedIn Testimonial</p>
        </a>
        <p
          class="testimonial"
          v-for="(line, lineNumber) of testimonial.recommendation.split('\n')"
          v-bind:key="lineNumber"
        >
          {{ line }}<br /><br />
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.testimonial-container {
  display: grid;
  grid-template-columns: repeat(1fr 1fr, minmax(350px, 1fr));
  gap: 1rem;
  /* display: flex;
  flex-wrap: wrap;
  gap: 1rem; */
}

a:hover {
  text-decoration: underline;
  text-decoration-color: var(--primary-300);
}

.icon {
  color: var(--primary-400);
}

.linkedinVerified {
  display: flex;
  flex-direction: row;
  /* background-color: var(--primary-100); */
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.testimonial-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--primary-100);
  /* max-width: 350px; */
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.testimonial-card:hover {
  box-shadow: 0 0 10px rgba(78, 78, 95, 0.1);
}

.profile-image {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.name {
  display: block;
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
  laboriaWillis: {
    name: "LaBoria Willis",
    image: "/img/headshots/laboria-headshot.jpeg",
    jobTitle: "Director, User Experience (UX)",
    company: "Symetra Insurance",
    recommendation:
      "It was a pleasure having Hugh work with our design team. From the start, Hugh brought a positive and impactful presence that energized and motivated everyone. He quickly got up to speed, demonstrating and sharing his extensive knowledge and attention to detail in every project he undertook. \n Hugh played a large role in helping to improve our design system processes. His insights and meticulous approach were instrumental in improving them and strengthening collaboration with engineering. In a short timeframe, he taught the team valuable design system methods that enhanced our workflow and productivity.\nAs a designer, Hugh's commitment to excellence and collaborative spirit made a substantial difference. His contributions and collaborations have left a lasting positive impact. His expertise, character, and collaborative nature make him an asset to any team.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/laboria/",
  },
  amrShady: {
    name: "Leonardo Shapiro",
    image: "/img/headshots/leonardo-headshot.jpeg",
    jobTitle: "Chief Product Officer",
    company: "Tribal Credit",
    recommendation:
      "I'm excited to recommend Hugh, our Director of Design. In his role here, Hugh has been a standout leader in design and an invaluable asset to our team.\nHugh combines a keen sense of strategic thinking with a hands-on approach to design leadership. He doesn't just design; he thinks ahead, aligning every project with our broader business goals while keeping creativity at the forefront. This strategic approach ensures our designs are not only aesthetically appealing but also effective in the market.\nWhat truly sets Hugh apart is his skill in mentoring diverse team members, especially those outside the design field. He has a unique ability to make complex design concepts accessible and engaging. This has fostered a collaborative environment where everyone feels confident contributing to the design process.\nBeyond his immediate team, Hugh has instilled a culture of design thinking throughout our organization. He encourages problem-solving that incorporates design principles, leading to more innovative and user-centered product solutions.\nIn short, Hugh is a remarkable blend of a strategist and a mentor, making him a significant asset to any team. I am excited to see the impact he will make in his next role.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/amrshady/",
  },
  ethanMillstein: {
    name: "Ethan Millstein",
    image: "/img/headshots/ethan-headshot.jpeg",
    jobTitle: "Mobile Eng Manager",
    company: "Tribal Credit",
    recommendation:
      "I had the privilege of working closely with Hugh, an exceptional UI/UX designer and leader, during our time together on various projects. As a lead software engineer, I was continually impressed by Hugh's creativity, dedication, and meticulous attention to detail. His passion for design is evident in every aspect of his work, from conceptualization to execution.\nHugh has a unique ability to blend aesthetic appeal with user functionality, creating designs that are both beautiful and intuitive. His leadership skills shine through as he effortlessly guides the team, fostering a collaborative and innovative environment. Hugh’s commitment to excellence and his proactive approach to problem-solving make him an invaluable asset to any team.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/ethanmillstein/",
  },
  mateusPienta: {
    name: "Mateus Pienta",
    image: "/img/headshots/mateus-headshot.jpeg",
    jobTitle: "Sr. Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh is one of the best Design Leaders I've worked with in the past decade. He has a combined knowledge of Technology, coding, and design that allows him to navigate effortlessly through all types of daily projects, guide and mentor professionals, and help teams succeed in a world-class level of actuation. Hugh also excels in leadership through his immense care towards people, which to me is one of his biggest highlights, where even in the hardest of times he will be able to keep strong; Building team motivation and wellness by being fair, transparent, and thoughtful towards everyone around him.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/mateuspienta/",
  },
  omarHosney: {
    name: "Omar Hosney",
    image: "/img/headshots/omar-headshot.jpeg",
    jobTitle: "Sr. Data Scientist",
    company: "Tribal Credit",
    recommendation:
      "Working with Hugh at Tribal Credit, where he was the Director of Product Design, was an enlightening experience. His profound expertise in front-end technology, combined with a strategic mindset, made him an invaluable member of our team.\nHugh's ability to translate complex concepts into user-friendly designs is exceptional. He is not just technically proficient; he also possesses a strategic vision that aligns product development with broader business goals. This rare blend of skills allowed him to foresee market trends and position our projects for future success.\nA natural leader, Hugh fostered a collaborative environment where creativity and innovation thrived. His inclusive approach and clear communication enhanced our team dynamics, making even the most challenging projects manageable and enjoyable.\nIn summary, Hugh's technical expertise in front-end technology, strategic thinking, and leadership skills make him a tremendous asset to any organization. I highly recommend him for any future roles or projects he pursues.",
    linkedInVerifiedRec: true,
    linkedInProfile:
      "https://www.linkedin.com/in/omarebnelkhattab-hosney-9a931b3/",
  },
  alhassanSedky: {
    name: "Alhassan Sedky",
    image: "/img/headshots/alhassan-headshot.jpeg",
    jobTitle: "Sr. Product Manager",
    company: "Tribal Credit",
    recommendation:
      "Hugh is not only one of the best designers I have worked with but he is aso an amazing human to be around. As our first designer, Hugh set solid standards for our design practice from the start. His designs combined appealing visuals with user-friendly experiences, backed by a clear understanding of our customers.\n When our company expanded, so did Hugh's responsibilities. He built our design team from the ground up, hiring capable designers and cultivating a collaborative culture. Under his leadership, our team produced a comprehensive design system that enhanced our product experiences. \n Hugh has a knack for aligning creative work with business goals. He ensures designs resonate with users while also supporting strategic objectives. His guidance helped elevate design as a key driver of our success.\n Beyond professional achievements, Hugh fosters an environment where people feel supported to grow. His approachable style, good relationships, and positive attitude united our team through challenging projects.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/alhassan-sedky/",
  },
  emilianoCarrillo: {
    name: "Emiliano Carrillo",
    image: "/img/headshots/emi-headshot.jpeg",
    jobTitle: "Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh is an outstanding designer and manager who leads with empathy. Thanks to his guidance, I've grown from a junior designer to leading design for a new product as a Product Designer. He has a knack for identifying projects that fit your path and profile as a designer.\nHugh is also a strong advocate of systems thinking and integrating tools like design systems or DesignOps to support others' work.",
    linkedInVerifiedRec: true,
    linkedInProfile: "https://www.linkedin.com/in/emiliano-carrillo/",
  },
  mayteAbud: {
    name: "Mayte Abud",
    image: "/img/headshots/mayte-headshot.jpeg",
    jobTitle: "Sr. HR Business Partner LATAM | Head of People",
    company: "Jeeves",
    recommendation:
      "I have had the pleasure of working with Hugh at Tribal, where he has consistently demonstrated exceptional talent and leadership as a Product Designer. I can tell that its not just the professional but the human focus skills, that makes Hugh a great leader. I highly recommend Hugh for any design leadership role.",
    linkedInVerifiedRec: true,
    linkedInProfile:
      "https://www.linkedin.com/in/mayte-cardoso-hr-itrecruiting/",
  },
  mohamedAbouHussein: {
    name: "Mohamed AbouHussein",
    image: "/img/headshots/mo-headshot.jpeg",
    jobTitle: "Director of Product",
    company: "Tribal Credit",
    recommendation:
      "Hugh excels in user-centric design and cross-team partnership. His attention to detail and collaborative modalities have been pivotal in advancing our product and success.",
    linkedInVerifiedRec: false,
    linkedInProfile: "https://www.linkedin.com/in/mohamed-abouhussein12345/",
  },
  yehorMamchits: {
    name: "Yehor Mamchits",
    image: "/img/headshots/yehor-headshot.jpeg",
    jobTitle: "Sr. Product Designer",
    company: "Tribal Credit",
    recommendation:
      "Hugh has led our design team to excellence, innovating with a deep commitment to quality and design thinking.",
    linkedInVerifiedRec: false,
    linkedInProfile: "https://www.linkedin.com/in/yehor-mamchyts-198543a3/",
  },
};
</script>
