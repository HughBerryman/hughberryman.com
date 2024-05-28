<template>
  <div class="main-container">
    <h1>Stack</h1>
    <h4>The applications and tools I frequently use.</h4>

    <h2>Tools</h2>
    <div class="skill-container">
      <ul v-for="tool in tools" role="list">
        <li class="skill">
          <div style="display:flex; justify-center; align-items: center; ">
            <Icon
              :name="tool.icon"
              size="26"
              style="margin-top: 3px; margin-right: 0.5rem"
            />
            <p style="color: var(--primary-500); font-weight: 600">
              {{ tool.name }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <h2>Skills</h2>
    <div class="skill-container">
      <ul v-for="skill in skills" role="list">
        <li class="skill">
          <div style="display:flex; justify-center; align-items: center; ">
            <Icon
              :name="skill.icon"
              size="26"
              style="margin-top: 3px; margin-right: 0.5rem"
            />
            <p style="color: var(--primary-500); font-weight: 600">
              {{ skill.name }}
            </p>
          </div>
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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

  justify-content: center;
  align-items: center;

  vertical-align: middle;

  background-color: var(--primary-50);
  border-radius: var(--dsaas-border-radius);
  border: 1px solid var(--primary-100);
}

.skill:hover {
  border: 1px solid var(--primary-100);
}
</style>

<script setup lang="ts">
const tools = [
  // tools
  { name: "Figma", icon: "logos:figma" },
  { name: "Framer", icon: "logos:framer" },
  { name: "Storybook Design Systems", icon: "logos:storybook-icon" },
  { name: "Chromatic Design Systems", icon: "logos:chromatic-icon" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "NextJS", icon: "logos:nextjs-icon" },
  { name: "React Native", icon: "tabler:brand-react-native" },
  { name: "React", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
];

const skills = [
  // skills
  { name: "Design Thinking", icon: "ph:lightbulb-duotone" },
  { name: "Human-Centered Design", icon: "ph:fingerprint-simple-duotone" },
  { name: "Prototyping", icon: "ph:cube-transparent-duotone" },
  { name: "User Experience (UX) Design", icon: "ic:twotone-touch-app" },
  { name: "User Interface (UI) Design", icon: "ph:desktop-duotone" },
  { name: "Design Systems", icon: "icon-park-twotone:connection-box" },
  { name: "Cross-Functional Collaboration", icon: "ph:handshake-duotone" },
  { name: "Agile Methodologies", icon: "ph:arrow-clockwise-duotone" },
];
</script>
