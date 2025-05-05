<script>
  import SoloCard from '../components/Solo-Card.vue';

</script>
<template>
  <div className="h-screen bg-gray-900">
    <!-- Space div-->
    <div class="h-24"> </div>
    <!-- put cards in rows -->
    <div class="grid grid-rows-2 gap-y-20 ">
      <!-- Card -->
      <div class="overflow-hidden h-60 bg-gray-800/70   text-white font-mono justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 p-4  rounded-2xl mx-40 top-16 grid grid-rows-5">
        <h1 class="text-2xl font-bold text-blue-300   font-sans">What is this Website?</h1>
        <h2 class="text-xl font-sans text-blue-200 font-bold  grid-start-2 row-span-4">&emsp;&emsp;When my   Thanksgiving  break week started, I was given freedom   to choose how I spend my next 11 days, whether to be  productive or not. I knew that although I have done  some work with JS,HTML, and CSS before, my skills  weren't where theyneeded to be to obtain an  internship the upcomingsummer. So I decided that I   would spend mythanksgiving trying out the   React-Tailwind techstack. I wasn't planning on  building a portfoliowebsite, I just new I needed to  actually try makingsomething cohesive in order to  truly understand theinterplay between components. As   such I dove head first into tail wind, going through  the documentation and old StackOverflow posts from 7,  8 years ago everytime I came across an obstacle. I  proved to myself in a very short amount of time,that   I am able to take steps towards learning a  newtechnology, and do so under my own direction.</h2>
      </div>
    
      <!-- Putting text on left-->
        <div class="h-50 grid grid-cols-5">
          <!-- Second Card -->
          <div class="overflow-hidden h-60 bg-gray-800/70 text-white font-mono justify-items-center border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 rounded-2xl mx-40 grid grid-rows-5 col-span-3">
            <h1 class="text-2xl font-bold text-blue-300   font-sans">A glimpse into me!</h1>
            <h2 class="text-xl font-sans text-blue-200    font-bold grid-start-2 row-span-4">Lorem ipsum   dolor sit amet  consectetur adipisicing elit. At     eius perspiciatis   unde officia sequi repudiandae    modi accusamus   aspernatur. Quis molestias fuga    eos saepe soluta  sint, unde adipisci perferendis    ex nemo.</h2>
          </div>
        </div>        
      
    </div>
    
    
  </div>
</template>