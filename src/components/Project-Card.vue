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
      <div class="rounded-3xl bg-gray-800/70 hover:scale-105 border-2 border-blue-500 hover:to-blue-500/50 hover:shadow-blue-600 shadow-xl shadow-blue-600 p-4 transition-all duration-300 flex flex-col w-full h-full font-sans max-h-[500px] md:grid md:grid-rows-5 md:grid-cols-1">
        <h1 class="m-2 font-Hanuman font-bold text-lg sm:text-xl md:text-3xl text-center text-blue-300">{{Title}}</h1>
        <div class="md:row-start-2 md:row-span-4 grid grid-rows-7 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 justify-items-center">
          <h2 class="ml-6 mr-6 text-sm lg:text-md xl:text-lg text-left  text-blue-200 font-bold row-span-7 sm:row-span-5">{{blurb}}</h2>
          <img class="rounded-2xl md:h-[250px] sm:h-[175px] h-[100px] m-2 row-span-2 invisible sm:visible" :src="imageSrc" alt=""></img>
        </div>
        
      </div>
    </RouterLink>
</template>