<template>
  <nav class="sidebar">
    <div>
      <div class="profile-header">
        <NuxtImg
          src="/img/Avatar-lg.png"
          alt="Hugh Berryman Profile Image"
          class="profile-image"
        />
        <div class="profile-textinfo">
          <h3 class="name-heading">Hugh Berryman</h3>
          <p>Sr. Product Designer</p>
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
.profile-textinfo {
  margin-left: 1rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px; */
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.name-heading {
  margin-top: 0.5rem;
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
    icon: "lucide:home",
    path: "/",
  },
  projects: {
    name: "Projects",
    icon: "lucide:layout-dashboard",
    path: "/projects",
  },
  testimonials: {
    name: "Testimonials",
    icon: "lucide:pen-line",
    path: "/testimonials",
  },
  stack: {
    name: "Stack",
    icon: "lucide:wrench",
    path: "/stack",
  },
  about: {
    name: "About",
    icon: "lucide:user",
    path: "/about",
  },
  contact: {
    name: "Contact",
    icon: "lucide:mail",
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
