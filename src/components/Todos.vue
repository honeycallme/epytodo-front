<template>
  <div
    class="transition-all duration-500 bg-indigo-200 w-full flex justify-center items-center flex-col h-full"
  >
    <div
      class="topContainer w-full sticky top-0 left-0 z-10 text-center bg-indigo-200 pt-20 pb-3"
    >
      <h1 class="font-bold text-7xl text-black">Epytodo</h1>
      <div class="input my-12 w-full px-14 lg:px-56 flex flex-wrap">
        <input
          class="w-full lg:w-4/5 rounded-l-2xl py-4 px-7 outline-none border-none"
          type="text"
          placeholder="Type a Todo . . ."
          v-model="newTodo"
          @keyup.enter="addTodo()"
        />
        <button
          class="w-full lg:w-1/5 cursor-pointer rounded-r-2xl bg-black text-white font-bold py-3 px-8"
          @click="addTodo()"
        >
          Add Todo
        </button>
      </div>
    </div>
    <ul class="w-full px-14 lg:px-56">
      <li
        class="bg-white rounded-2xl w-full py-3 pl-6 pr-9 my-4 font-bold text-xl relative"
        v-for="(index, Todo) in Todos"
        :key="Todo.id"
      >
        {{ index }}

        <div class="absolute right-3 top-2 mt-2 px-3">
          <box-icon
            type="solid"
            class="cursor-pointer mr-3"
            @click="removeTodo(index)"
            name="check-circle"
            color="green"
            with="36"
          ></box-icon>
          <box-icon
            name="trash"
            color="red"
            class="cursor-pointer"
            @click="removeTodo(index)"
          ></box-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "boxicons";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Todos",
  data() {
    return {
      newTodo: "",
      Todos: ["First Todo . . ."],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo == "") {
        this.newTodo = "use vim ...";
      } else {
        this.Todos.push(this.newTodo);
        localStorage.setItem("Todos", JSON.stringify(this.Todos));
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.Todos.splice(index, 1);
      localStorage.setItem("Todos", JSON.stringify(this.Todos));
    },
  },
  created: function () {
    this.Todos = JSON.parse(localStorage.getItem("Todos"));
    this.Todos = this.Todos || [];
  },
};
</script>
