<script setup lang="ts">
  import SocialBar from './components/Social-bar.vue'
  import NotFound from './pages/NotFoundPage.vue'
  import ContactBar from './components/Contact-bar.vue'
  import { ref, computed } from 'vue'
  import router from './router'

  const currentPath = ref(window.location.hash || '/')

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash || '/'
  })

  const currentView = computed(() => {
    return router.currentRoute.value.path  ||   NotFound
  })

  console.log('Current route:', router.currentRoute.value.path)
  console.log('Current View:', currentView.value)
</script>

<template>
  <nav>
    <SocialBar />
  </nav>
  <RouterView />
  <ContactBar />
</template>
