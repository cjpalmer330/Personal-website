<script setup lang="ts">
  import SocialBar from './components/Social-bar.vue'
  import AboutMe from './pages/AboutMe.vue'
  import Home from './pages/Home.vue'
  import AboutThis from './pages/AboutThis.vue'
  import Projects from './pages/Projects.vue'
  import NotFound from './pages/NotFoundPage.vue'
  import ContactBar from './components/Contact-bar.vue'
  import { ref, computed } from 'vue'
  const routes = {
    '/': Home,
    '/AboutMe': AboutMe,
    '/Projects': Projects,
    '/Projects/PersonalWebsite': AboutThis
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] ||   NotFound
  })
</script>

<template>
  <SocialBar />
  <component :is="currentView" />
  <ContactBar />
</template>
