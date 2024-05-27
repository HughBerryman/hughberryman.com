<template>
  <nav class="sidebar">
    <div>
      <div class="profile-header">
        <NuxtImg
          src="/img/hugh-working-headshot-crop.jpeg"
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
            <Icon :name="item.icon" size="24" />
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
  margin: 1.5rem;
}

.profile-image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.8rem;
}

.name-role-section {
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
  margin-top: 4rem;
}

ul[role="list"] a {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-paragraph);
  padding: 1rem 2.5rem;
}

ul[role="list"] a:hover {
  color: var(--primary-400);
  background-color: var(--primary-100);
  /* padding: 1rem 2rem; */
}

ul[role="list"] a.router-link-active,
a.router-link-exact-active {
  color: var(--primary-500);
  background-color: var(--primary-100);
  /* padding: 1rem 3rem; */
}

.icon {
  color: var(--primary-400);
  margin-right: 1rem;
  transition: color 0.3s ease;
}

a.router-link-exact-active .icon {
  color: var(--primary-500);
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
    animation: slideIn 0.5s forwards;
  }
  .showSidebar {
    display: block;
    z-index: 100;
    /* animate in */
    animation: slideIn 0.5s forwards;
    transition: 2.2s cubic-bezier(0.36, -0.01, 0, 0.77);
  }
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
  about: {
    name: "Resume",
    icon: "ph:user-circle-duotone",
    path: "/about",
  },
  stack: {
    name: "Stack",
    icon: "ph:stack-duotone",
    path: "/stack",
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
