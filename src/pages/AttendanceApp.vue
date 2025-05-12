<script>
  import SoloCard from '../components/Solo-Card.vue';

  export default {
    name: 'AttendanceApp',
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
    <div class="grid grid-rows-3 gap-y-20 grid-cols-5 mx-10">
      <!-- Card -->
      <div class="overflow-hidden bg-gray-800/70   text-white font-mono justify-items-center border-2  border-blue-500 shadow-xl shadow-blue-600 p-4  rounded-2xl mx-20 top-16 grid grid-rows-5 col-span-5">
        <h1 class="text-2xl font-bold text-blue-300   font-sans">Capstone Project</h1>
        <h2 class="text-xl font-sans text-blue-200 font-bold  grid-start-2 row-span-4 mx-6">Along with my groupmates Ethan, Cahn, and Maaz, we spent our semester creating an application for our capstone professor. He wanted an app that could streamline his attendance taking process during his lectures. Given his specifications, we created a student facing web app, and a professor desktop app that both integrate with a central database to track everything he wanted!</h2>
      </div>
    
      <!-- Student Card -->
      <div class="overflow-hidden h-60 bg-gray-800/70 text-white justify-items-center border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 rounded-2xl grid grid-rows-5 col-span-3">
        <h1 class="text-2xl font-bold text-blue-300 font-sans">Student Checkin Site</h1>
        <h2 class="text-xl font-sans text-blue-200  font-bold grid-start-2 row-span-4 mx-4">Upon opening the web app, students are faced with fields asking for the class they are checking into, and their ID. When they submit the form, their ip is checked to be geolocated within the university, as well as not having multiple entries for the day. Both in an effort to ensure the student must actually be in the class to be marked present. After entering the class password that the professor can change daily, they are presented with the daily quiz, that the professor could make relevent to the daily lecture.</h2>
      </div>
      <!-- Student image-->
       <img src=""/>
      
      <!-- Professor image  -->
      
      <!-- Professor Card -->
       <div class="overflow-hidden h-60 bg-gray-800/70 text-white justify-items-center border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 rounded-2xl grid grid-rows-5 col-start-3 col-span-3">
        <h1 class="text-2xl font-bold text-blue-300 font-sans">Professor Dashboard</h1>
        <h2 class="text-xl font-sans text-blue-200  font-bold grid-start-2 row-span-4 mx-4">In designing the professor dashboard, we knew we were primarily designing a tool. This means we want all functions to be accessible from within the dashboard, removing the need to open another program, or manually add in information. This lead us to creating automatic record population, filtering by class / date / student functionalty. The ability to create, update, and delete whole classes in your dashboard, and even update the tardy status of any given student's attendance record.</h2>
      </div>
    </div>
    
    
  </div>
</template>