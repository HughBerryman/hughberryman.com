<template>
  <div class="index-style">
    <img
      src="/assets/images/Avatar.png"
      alt="Hugh Berryman Profile Image"
      class="profile-image"
    />
    <h2>Hugh Berryman, Sr. Product Designer</h2>
    <h1>Building digital products & experiences.</h1>
    <p>
      I love designing and developing digital experiences. Keep it simple, to
      the point, elegant, and understandable.
    </p>
    <div style="gap: 20px">
      <button class="primary">View Resume</button>
      <button class="secondary">Get in touch</button>
    </div>
  </div>
</template>

<style scoped>
.index-style {
  display: grid;
  gap: 1rem;
  width: 70%;
  margin: 0 auto;
  /* padding: 2rem 10rem; */
  text-align: start;
}

@media screen and (max-width: 768px) {
  .index-style {
    width: 90%;
  }
}
</style>
