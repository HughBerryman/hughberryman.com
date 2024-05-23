<template>
  <div class="main-container">
    <h1>Stack</h1>
    <h4>The applications and tools I frequently use.</h4>
    <div class="skill-container">
      <ul v-for="skill in skills" role="list">
        <li class="skill">
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skill-container {
  border: 1px solid var(--primary-100);
  border-radius: var(--dsaas-border-radius);
  padding: 1rem;
  background-color: white;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  background: rgba(255, 255, 255, 0.4);
  /* border-radius: 16px; */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(60px);
  /* -webkit-backdrop-filter: blur(5px); */
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
}

.skill {
  padding: 0.5rem;
  border: 1px solid transparent;
  list-style-type: none;
  font-size: 0.85rem;
  font-weight: 700;

  background-color: var(--primary-50);
  border-radius: var(--dsaas-border-radius);
  border: 1px solid var(--primary-100);
}

.skill:hover {
  border: 1px solid var(--primary-100);
}
</style>

<script setup lang="ts">
const skills = [
  { name: "Design Systems" },
  { name: "Figma" },
  { name: "User Experience (UX) Design" },
  { name: "User Interface (UI) Design" },
  { name: "Prototyping" },
  { name: "Cross-Functional Collaboration" },
  { name: "Storybook & Chromatic Integration" },
  { name: "Agile Methodologies" },
  { name: "Design Thinking" },
  { name: "Human-Centered Design" },
  { name: "Framer" },
  { name: "NextJS" },
  { name: "React Native" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind & CSS" },
];
</script>
