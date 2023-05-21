<template>
  <Nav />
  <Todos />
</template>

<script>
import Todos from "./components/Todos.vue";
import Nav from "./components/nav_main.vue";
export default {
  components: {
    Nav,
    Todos,
  },
};
</script>


