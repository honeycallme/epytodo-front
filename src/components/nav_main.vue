<template>
<nav class="border-gray-200 my-100">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Epytodo</span>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-4 py-2 text-center mr-3 md:mr-0">Login / Register</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-2xl text-white rounded md:bg-transparent md:text-black" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-2xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent">Todos</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

