<script>
  import SoloCard from '../components/Solo-Card.vue';

  export default {
    name: 'SmallProjects',
    components: {
      SoloCard
    }
  }
</script>
<template>
  <div className="h-screen bg-gray-900">
    <!-- Space div-->
    <div class="h-24"> </div>
    <!-- Possible Title div here-->
    <!-- creating grid -->
    <div class="grid grid-rows-2 grid-cols-5 gap-10 mx-6">
      <!-- First Card 3 cols, top row-->
      <div class="overflow-hidden h-60 bg-gray-800/70 text-white justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 p-4  rounded-2xl grid grid-rows-5 gap-5 col-start-1 col-span-3 grid-cols-5">
        <h1 class="text-2xl font-bold text-blue-300   font-sans col-span-5">Orbits Simulation</h1>
        <h2 class="text-lg font-sans text-blue-200 font-bold  row-start-2 row-span-4 col-span-3">&emsp;Using the pygame package, I was able to create a simple orbit simulation! With the ability to change the strength of gravity, and the simulation speed, I could watch my placed colored dots orbit each other.</h2>
        <img src="../assets/Orbit-Preview.png" alt="Orbit Simulation" class="col-start-4 col-span-2 row-start-2 row-span-4 bottom-2"></img>
      </div>
    
      <!-- Second Card, 3 cols, bottom row-->
      <div class="overflow-hidden h-60 bg-gray-800/70 text-white justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 col-start-1 col-span-3 row-start-2 grid grid-rows-5 grid-cols-5 rounded-2xl w-full p-4">
        <h1 class="text-2xl font-bold text-blue-300  font-sans col-span-5">Fluid Simulation</h1>
        <h2 class="text-lg font-sans text-blue-200   font-bold row-start-2 row-span-4 col-span-3">&emsp;Again using the pygame package to draw to the screen, I was able to create a simple, and slow, fluid simulation! Inspired by <a target="_blank" href="https://youtu.be/rSKMYc1CQHE?si=md3_z8Do4bfbg-sB" class="underline">Sebastion Lague</a>, I programmed a working simulation based off of sector calculated force vectors.</h2>
        <img class="col-span-2 row-span-4 row-start-2"></img>
      </div>        
      
      <!-- Third Card, 2 cols, right side-->
      <div class="col-start-4 col-span-2 row-start-1 row-span-2 w-full overflow-hidden h-full bg-gray-800/70 text-white justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 rounded-2xl">
        <h1 class="text-2xl font-bold text-blue-300   font-sans">Class Notes</h1>
          <h2 class="text-xl font-sans text-blue-200    font-bold grid-start-2 row-span-4"></h2>
      </div>
    </div>
    
    
  </div>
</template>