<script>
import TodoFilter from "./TodoFilterButtons.vue";
import DeleteIcon from "./icons/DeleteIcon.vue";

export default {
  components: { DeleteIcon, TodoFilter },
  props: {
    todos: { type: Array, required: true },
  },
  emits: ["removeTodo", "checkTodo", "filterToggle", "updateTodos"],
  computed: {
    openTodos() {
      let count = 0;
      this.todos.forEach((todo) => {
        if (todo.done === false) {
          count += 1;
        }
      });
      return count;
    },
  },
  methods: {
    getFilteredTodos(e) {
      this.$emit("filterToggle", e);
    },
  },
};
</script>

<template>
  <div id="todos" class="shadow-lg">
    <TodoFilter
      @filter-change="getFilteredTodos"
      @remove-done="$emit('updateTodos')"
    />
    <ul class="bg-gray-800 rounded-b-lg px-2" id="todo-list">
      <template v-if="todos.length > 0">
        <li v-for="todo in todos" :key="todo.id">
          <div
            class="flex w-full items-center gap-4 break-words overflow-hidden text-ellipsis"
          >
            <input
              type="checkbox"
              :name="'todo-' + todo.id"
              :id="'todo-' + todo.id"
              class="todo-check"
              :checked="todo.done"
              @change="$emit('checkTodo', todo)"
            />
            <label :for="'todo-' + todo.id">
              {{ todo.description }}
            </label>
          </div>
          <DeleteIcon class="del-icon" @click="$emit('removeTodo', todo.id)" />
        </li>
      </template>
      <template v-else>
        <p class="text-gray-300 text-opacity-20 px-4 py-5">
          No to-do's to list.
        </p>
      </template>
    </ul>
  </div>
  <div class="todo-info">{{ openTodos }} open to-do’s</div>
</template>

<style scoped>
li {
  @apply flex justify-between items-center border-b border-gray-500 px-3 py-5  text-gray-300 last-of-type:border-none gap-2;
}
.del-icon {
  @apply h-[1.25rem] w-[1.25rem] p-0 m-0 cursor-pointer lg:invisible hover:text-purple-800 shrink-0;
}

li:hover .del-icon {
  @apply lg:visible;
}
.todo-check {
  @apply rounded-full h-[1.25rem] w-[1.25rem] bg-transparent border-2 border-gray-500 focus:ring-0  focus:ring-offset-0 focus:border-purple-800 relative;
}
.todo-check:checked {
  @apply bg-gradient-to-bl from-sky-400 via-indigo-400 to-purple-400;
}
.todo-check:checked::before {
  content: "\2713";
  @apply inline-block text-center text-sm font-bold text-white absolute left-1/2 -translate-x-1/2 -top-[0.125rem];
}
label {
  @apply text-gray-300;
}
.todo-check:checked + label {
  @apply line-through text-opacity-20;
}
.todo-info {
  @apply bg-gray-800 px-4 py-2 mt-4 rounded-lg w-full text-gray-300 text-opacity-40 text-xs italic text-right shadow-lg;
}
</style>
