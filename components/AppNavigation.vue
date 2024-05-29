<template>
  <nav :class="['sidebar', { showSideNav: showSideNav }]">
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
          <NuxtLink :to="item.path" @click="closeSideNav">
            <Icon :name="item.icon" size="24" />
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- <div class="social-links" v-for="social in socials">
        <NuxtLink :to="social.url">
          <Icon :name="social.icon" />
        </NuxtLink>
      </div> -->
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

.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 25px;

  border-top: red;
  background-color: pink;
  border-radius: 100%;
}

.social-links.hover {
  color: blue;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
    animation: slideIn 0.5s forwards;
    transition: 2.2s cubic-bezier(0.36, -0.01, 0, 0.77);
    transition: transform 300ms ease-out;
  }
  .showSidebar {
    display: block;
    z-index: 100;
    /* animate in */
    animation: slideIn 0.5s forwards;
    transition: 2.2s cubic-bezier(0.36, -0.01, 0, 0.77);
    transition: transform 300ms ease-out;
  }

  .profile-header {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showSideNav: Boolean,
});

const emits = defineEmits(["close-sidenav"]);

const closeSideNav = () => {
  emits("close-sidenav");
};

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
  github: {
    url: "https://github.com/HughBerriez/hughberryman.com",
    icon: "lucide:github",
  },
};
</script>
