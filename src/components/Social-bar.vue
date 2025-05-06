<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header className=" h-56 w-full text-xl bg-gradient-to-b to-gray-900 to from-blue-800  overflow-hidden grid grid-rows-2 pr-4">
    <!-- Name and social links-->
    <div class="relative z-40 w-full h-24 p-4">
      <!-- Name -->
      <div class="absolute w-full">
        <h3 class='text-left font-mono font-bold p-4 whitespace-nowrap text-blue-300 text-5xl align-middle'>Chris Palmer</h3>
      </div>

      <!-- Top Bar Social Links-->
      <div alt="social Links" class="float-right grid grid-cols-2 gap-4 top-4">
        <div class="w-24">
          <a
          to="https://github.com/cjpalmer330"
          target="_blank"
          rel="noopener noreferrer"
          class="shadow-lg shadow-blue-500 hover:shadow-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
          >
            <img alt="Github Logo" src='../assets/github-mark-white.svg' class="w-24"/>
          </a>
        </div>

        <div class="w-24">
          <a
            href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:shadow-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 w-24 shadow-lg shadow-blue-500"
          >
            <img alt="LinkedIn Logo"src='../assets/linkedIn.svg' class="w-24"/>
          </a>
        </div>
      </div>
    </div>

    <!-- Page Navigation-->
    <nav className="justify-center grid grid-cols-7 gap-2">
      <ul className='text-center col-start-2 col-span-5 grid grid-cols-4 gap-6 
      items-center'>
          <RouterLink
            class="p-2 text-white text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/"
            >
              Home
          </RouterLink>
          <RouterLink
            class="p-2 text-white text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/AboutMe"
            >About Me
          </RouterLink>
          <RouterLink
            class="p-2 text-white text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/Projects"
            >
              Projects
          </RouterLink>
          <RouterLink
            class="p-2 text-white text-xl font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500"
            to="/Projects/PersonalWebsite"
            >
              This Website
          </RouterLink>
        </ul>
    </nav>
  </header>
</template>
