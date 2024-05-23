<template>
  <nav class="sidebar">
    <div>
      <div class="profile-header">
        <NuxtImg
          src="/img/Avatar-lg.png"
          alt="Hugh Berryman Profile Image"
          class="profile-image"
        />
        <div class="name-role-section">
          <h3 class="name">Hugh Berryman</h3>
          <p class="role">Sr. Product Designer</p>
        </div>
      </div>

      <ul role="list" class="nav-items-container">
        <li v-for="item in navItems">
          <NuxtLink :to="item.path">
            <Icon :name="item.icon" size="22" />
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 100vh;
  background-color: #fff;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  border-right: 1px solid var(--primary-100);
}

.profile-header {
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
}

.profile-image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.name-role-section {
  margin-top: 0.5rem;
  font-size: 16px;
  font-weight: 500;
}

.name {
  font-weight: 700;
}

.role {
  font-weight: 500;
  font-size: 12px;
  color: var(--color-text-secondary);
}

.nav-items-container {
  margin-top: 2rem;
}

ul[role="list"] a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-paragraph);
  padding: 1rem 2rem;
  font-size: 16px;
}

ul[role="list"] a:hover,
a.router-link-active,
a.router-link-exact-active {
  color: var(--primary-400);
  background-color: var(--primary-50);
  padding: 1rem 2rem;
}

ul[role="list"] a:active {
  /* color: var(--primary-400);
  background-color: var(--primary-100); */
}

.social-links {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.icon {
  color: var(--primary-400);
  margin-right: 10px;
  /* margin-left: 10px; */
  transition: color 0.3s ease;
  font-size: 22px;
}

.icon:hover {
  color: var(--primary-500);
}
</style>

<script setup lang="ts">
const navItems = {
  home: {
    name: "Home",
    icon: "ph:house-duotone",
    path: "/",
  },
  projects: {
    name: "Projects",
    icon: "ph:briefcase-duotone",
    path: "/projects",
  },
  testimonials: {
    name: "Testimonials",
    icon: "ph:quotes-duotone",
    path: "/testimonials",
  },
  stack: {
    name: "Stack",
    icon: "ph:stack-duotone",
    path: "/stack",
  },
  about: {
    name: "About",
    icon: "ph:user-circle-duotone",
    path: "/about",
  },
  contact: {
    name: "Contact",
    icon: "ph:envelope-simple-duotone",
    path: "/contact",
  },
};

const socials = {
  // dribbble: {
  //   url: "https://dribbble.com/acrossthehughniverse",
  //   icon: "lucide:dribbble",
  // },
  linkedin: {
    url: "https://www.linkedin.com/in/hughberryman",
    icon: "lucide:linkedin",
  },
  github: { url: "https://github.com/hughberriez", icon: "lucide:github" },
};
</script>
