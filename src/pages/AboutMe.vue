
<template>
  <div class="bg-gray-900 text-white font-mono grid-rows-2 justify-items-center min-w-[500px] w-full h-full">
    <!-- Space div-->
    <div class="h-12"> </div>
    <!-- grid div-->
    <div class="grid grid-cols-7 auto-rows-min gap-x-2 gap-y-4 lg:gap-y-8 lg:gap-x-4 mx-4 lg:mx-14" >
      <!-- Title Card -->
      <div class="rounded-3xl bg-gray-800/70 border-2  col-span-7 md-col-span-5 border-blue-500 shadow-xl shadow-blue-600 m-8 p-4 grid grid-rows-7 font-sans auto-rows-min">
        <h1 class="m-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-blue-300">Who is Chris Palmer?</h1>
        <h2 class="mx-2 md:mx-6 text-sm md:text-md lg:text-lg text-left text-blue-200 font-bold row-start-2 row-span-6">&emsp;&emsp;If I were to describe myself with a single word, it would be pensive. Everyday I spend on earth, several hours are spent pondering about the foundational reasons and meanings behind the topic of the hour. Whether that be some software project I'm currently working on, the philosophical inquiry on the day, or the text I'm reading, I find immense satisfaction in knowing the structural blocks that construct some idea. This has lead me to have certain hobbies such as engaging in philosophy, reading, and music.</h2>
      </div>

      <!-- Reading Card -->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 grid  grid-rows-5 col-span-7 m-8 md:col-span-5 col-start-1 font-sans row-start-2 h-56">
        <h2 class="m-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-blue-300">Reading</h2>
        <h2 class="mx-2 text-sm md:text-md lg:text-lg text-left  text-blue-200 font-bold">&emsp;&emsp;Although not as much of an avid reader as I was a year ago, I do read regularly. I enjoy selections from a varied set of genres: literary fiction, history, philosophy, science fiction</h2>
      </div>

      <!-- Fav Books Card -->
      <div class="rounded-3xl bg-gray-800/70 border-2   border-blue-500 shadow-xl shadow-blue-600 p-4 md:grid  grid-rows-5 col-span-2 col-start-6 font-sans row-start-2 hidden md:visible h-56 my-8 mr-8">
        <h2 class="mx-2 font-bold text-lg md:text-xl lg:text-2xl text-center text-blue-300">Short List</h2>
        <ul class="mx-2 lg:mx-6 text-sm lg:text-md text-left  text-blue-200 font-bold list-disc">
          <li>Project Hail Mary</li>
          <li>1984</li>
          <li>Gone Girl</li>
          <li>Brave New World</li>
          <li class="invisible md:visible">The Silent Patient</li>
        </ul>
      </div>

      <!-- Fav Phil Books Card -->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 md:grid  grid-rows-5 col-span-2 col-start-1 font-sans row-start-3 hidden md:visible my-8 ml-8">
        <h2 class="mx-2 font-bold text-lg md:text-xl lg:text-2xl lg:text-3xl text-center text-blue-300 row-start-1 ">Favored Topics</h2>
        <ul class="mx-4 md:mx-6 text-sm md:text-md lg:text-lg text-left text-blue-200 font-bold list-disc row-span-4 row-start-2">
          <li>Philosophy of Mind</li>
          <li>Ethics - Hume, Mill, Camus</li>
          <li>Political Philosophy - Locke, Rousseau, Hobbes, Popper</li>
        </ul>
      </div>

      <!-- Philosophy Card -->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 grid grid-rows-5 col-span-7 md:col-span-5 col-start-1 md:col-start-3 m-8 font-sans row-start-3">
        <h2 class="m-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-blue-300">Philosophy</h2>
        <h2 class="mx-2 text-sm md:text-md lg:text-lg text-left text-blue-200 font-bold overflow-hidden row-span-4 row-start-2">If there was one topic of literature that I was granted for the rest of my life, I would be apt to choose philosophy. There are no questions that fester in my mind more, than ones relating to the human condition, purpose, language, and ethics. Where some people find great joy in watching or listening to a story of a strong hero, or enjoy watching their favorite sports team play. I enjoy trying to find answers to questions regarding the world and my place within it. What ought I do? How ought I act and react? Is there some teleological purpose to the way things are? Everyone must answer these questions for themselves, and over the past few years I have found mine.</h2>
      </div>
    </div>
    
  </div>
</template>