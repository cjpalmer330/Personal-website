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
    <!-- put cards in rows -->
    <div class="grid grid-rows-2 gap-y-20 ">
      <!-- Card -->
      <div class="overflow-hidden h-60 bg-gray-800/70   text-white font-mono justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 p-4  rounded-2xl mx-40 top-16 grid grid-rows-5">
        <h1 class="text-2xl font-bold text-blue-300   font-sans">Small Projects</h1>
        <h2 class="text-xl font-sans text-blue-200 font-bold  grid-start-2 row-span-4">placeholder</h2>
      </div>
    
      <!-- Putting text on left-->
        <div class="h-50 grid grid-cols-5">
          <!-- Second Card -->
          <div class="overflow-hidden h-60 bg-gray-800/70 text-white font-mono justify-items-center border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 rounded-2xl mx-40 grid grid-rows-5 col-span-3">
            <h1 class="text-2xl font-bold text-blue-300   font-sans">Working on a team!</h1>
            <h2 class="text-xl font-sans text-blue-200    font-bold grid-start-2 row-span-4">placeholder</h2>
          </div>
        </div>        
      
    </div>
    
    
  </div>
</template>