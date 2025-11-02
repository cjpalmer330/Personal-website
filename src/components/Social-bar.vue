<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="h-64 md-h-56 w-full text-xl bg-gradient-to-b to-gray-900 to from-blue-800  overflow-hidden grid grid-rows-2 pr-4 min-w-[500px] pb-4">
    <!-- Name and social links-->
    <div class="relative z-40 w-full h-36 p-4">
      <!-- Name -->
      <div class="absolute w-96">
        <h3 class='text-left font-mono font-bold p-4 whitespace-nowrap text-blue-300 text-5xl align-middle invisible sm:visible'>Chris Palmer</h3>
      </div>

      <!-- Top Bar Social Links-->
      <div alt="social Links" class="float-right grid grid-cols-2 gap-4 top-4">
        <div class="w-24">
          <a
          href="https://github.com/cjpalmer330"
          target="_blank"
          rel="noopener noreferrer"
          class="w-24 rounded-full"
          >
            <img alt="Github Logo" src='../assets/github-mark-white.svg' class="hover:shadow-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 w-24 shadow-lg shadow-blue-500 rounded-full"/>
          </a>
        </div>

        <div class="w-24">
          <a
            href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
            target="_blank"
            rel="noopener noreferrer"
            class=" w-24 rounded-xl"
          >
            <img alt="LinkedIn Logo"src='../assets/linkedIn.svg'
            class="hover:shadow-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500 rounded-xl"/>
          </a>
        </div>
      </div>
    </div>

    <!-- Page Navigation-->
    <nav class="justify-center grid grid-cols-9 gap-2">
      <ul className='text-center col-start-2 col-span-7 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 md:gap-6 
      items-center'>
          <RouterLink
            class="p-1 md-p-2 text-white text-lg md-text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/"
            >
              Home
          </RouterLink>
          <RouterLink
            class="p-1 md-p-2 text-white text-lg md-text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/AboutMe"
            >About Me
          </RouterLink>
          <RouterLink
            class="p-1 md-p-2 text-white text-lg md-text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/Projects"
            >
              Projects
          </RouterLink>
          <RouterLink
            class="p-1 md-p-2 text-white text-lg md-text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/Projects/PersonalWebsite"
            >
              This Website
          </RouterLink>
        </ul>
    </nav>
  </header>
</template>
