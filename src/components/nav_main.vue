<template>
<nav class="border-gray-200 my-100">
  <div class="max-w-screen-l flex flex-wrap items-center justify-between mx-auto p-4">
  <span class="ml-10 self-center text-xl font-semibold whitespace-nowrap text-black">Epytodo</span>
  <div class="flex md:order-2">
      <RouterLink to="/auth" type="button" class="mr-12 text-white text-l bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-4 py-2 text-center md:mr-0">Login / Register</RouterLink>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-">
      <li>
        <RouterLink to="/" class="block py-2 pl-3 pr-4 text-xl text-black hover:text-white rounded md:bg-transparent" aria-current="page">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/todos" class="block py-2 pl-3 pr-4 text-xl text-black hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent">Todos</RouterLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

