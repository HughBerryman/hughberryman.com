<template>
  <!-- <header> -->
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/testimonials">Testimonials</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/stack">Skills & Tool Stack</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About me / Contact</NuxtLink>
      </li>
    </ul>
  </nav>
  <!-- </header> -->
</template>

<style scoped>
nav {
  /* display: flex;
  flex-direction: column; */

  background-color: transparent;
  padding: 10px;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: blue;
}
</style>
