<template>
  <nav class="sidebar">
    <div>
      <div class="profile">
        <img
          src="/assets/Avatar.png"
          alt="Hugh Berryman Profile Image"
          class="profile-image"
        />
        <h2 class="name-heading">Hugh Berryman</h2>
        <p>Sr. Product Designer</p>
      </div>
      <ul class="nav-links">
        <li>
          <NuxtLink to="/" exact>
            <i class="icon-home">
              <Icon name="uil:github" color="black" />
            </i>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">
            <i class="icon-briefcase"></i> Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/testimonials">
            <i class="icon-pencil"></i> Testimonials
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/stack"> <i class="icon-wrench"></i> Stack </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about"> <i class="icon-user"></i> About </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">
            <i class="icon-envelope"></i> Contact
          </NuxtLink>
        </li>
      </ul>
      <div class="social-links">
        <a href="https://dribbble.com/acrossthehughniverse"
          ><Icon name="uil:dribbble" color="black" class="icon-dribbble"
        /></a>
        <a href="https://www.linkedin.com/in/hughberryman"
          ><Icon name="uil:linkedin" color="black" class="icon-linkedin" />
        </a>
        <a href="https://github.com/hughberriez"
          ><Icon name="uil:github" color="black" class="icon-github" />
        </a>
      </div>
    </div>
    <p>Made by Hugh</p>
  </nav>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile {
  padding: 20px;
  text-align: center;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.name-heading {
  margin: 0.5rem;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
}

.nav-links a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-paragraph);
  padding: 1rem 2rem;
  font-size: 16px;
}

.nav-links a:hover {
  color: var(--primary-700);
  background-color: var(--primary-200);
  padding: 1rem 2rem;
}

.nav-links i {
  /* margin-right: 10px; */
}

.social-links {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.social-links a {
  color: #333;
  font-size: 24px;
}

.social-links a:hover {
  color: #007bff;
}
</style>
