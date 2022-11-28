<script>
import AddIcon from "./icons/AddIcon.vue";
export default {
  components: { AddIcon },
  emits: ["newTodo"],
  data() {
    return { todo: "", hasLetters: true };
  },
  methods: {
    addTodo() {
      if (this.todo.length > 0) {
        this.$emit("newTodo", this.todo);
        this.$refs.newTodo.focus();
        this.todo = "";
      } else {
        this.hasLetters = false;
      }
    },
  },
  watch: {
    todo(value) {
      if (value.length > 0) {
        this.hasLetters = true;
      }
    },
  },
};
</script>

<template>
  <p class="text-red-500 px-2 pb-2" v-show="!hasLetters">Write something!</p>
  <div class="input-wrapper">
    <input
      type="text"
      name="add-todo"
      id="add-todo"
      placeholder="Add your to-do!"
      ref="newTodo"
      v-model="todo"
      @keypress.enter="addTodo()"
    />
    <AddIcon
      class="h-[1.25rem] w-[1.25rem] text-gray-500 cursor-pointer hover:text-purple-800"
      @click="addTodo()"
    />
  </div>
</template>

<style scoped>
.input-wrapper {
  @apply flex items-center justify-between bg-gray-800 rounded-lg mb-10 pr-4 focus-within:border focus-within:border-purple-800;
}

#add-todo {
  @apply border-none bg-transparent rounded-lg shadow-lg  w-full focus:ring-0 text-gray-300 placeholder:text-gray-300 placeholder:text-opacity-20 py-2 pl-4;
}
</style>
