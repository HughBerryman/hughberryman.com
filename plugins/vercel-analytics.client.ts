import { inject } from "@vercel/analytics";

/**
 * Nuxt plugin to integrate Vercel Analytics on the client side.
 */
export default defineNuxtPlugin(() => {
  try {
    // Inject Vercel Analytics
    inject();
  } catch (error) {
    console.error("Failed to inject Vercel Analytics:", error);
  }
});
