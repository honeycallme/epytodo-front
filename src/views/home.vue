<template>

<Nav/>
<div class="mx-auto flex flex-col h-screen justify-center items-center">
    <div class="w-96 h-96 rounded-full overflow-hidden mb-10">
        <img src="https://i.ibb.co/n3JzfTX/Pngtree-vector-flat-business-office-4210245.jpg" alt="logo" class="object-cover w-full h-full">
    </div>
    <h1 class="text-5xl font-bold">Epytodo</h1>
    <p class="text-2xl font-semibold">A colaborative web project !</p>

    <p class="mt-4">made with love by fanga and mathis !</p>
</div>

</template>

<script>
import Nav from "../components/nav_main.vue";
export default {
  components: {
    Nav,
  },
};
</script>


