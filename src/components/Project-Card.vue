<script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    'filename': String,
    'Title': String,
    'blurb': String,
    'link': String
  })

  const imageSrc = computed(() => {
      return new URL(`../assets/${props.filename}`, import.meta.url).href;
    });
</script>
<template>
  <RouterLink
    :to="`${link}`"
    >
      <div class="rounded-3xl bg-gray-800/70 hover:scale-105 border-2 border-blue-500 hover:to-blue-500/50 hover:shadow-blue-600 shadow-xl shadow-blue-600 p-4 transition-all duration-300 grid grid-rows-5 w-full h-full font-sans">
        <h1 class="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">{{Title}}</h1>
        <div class="row-start-2 row-span-4 grid grid-cols-2 justify-items-center">
          <h2 class="ml-6 mr-6 font-Hanuman text-lg text-left  text-blue-200 font-bold">{{blurb}}</h2>
          <img class="rounded-2xl h-[250px] m-2" :src="imageSrc" alt=""></img>
        </div>
        
      </div>
    </RouterLink>
</template>