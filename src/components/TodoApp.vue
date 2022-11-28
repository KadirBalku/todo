<script>
import TodoList from "./TodoList.vue";
import TodoInput from "./TodoInput.vue";

export default {
  components: { TodoInput, TodoList },

  data() {
    return { todosFromApi: [], activeFilter: "all" };
  },
  computed: {
    filteredTodos() {
      let todos = [];
      if (this.activeFilter === "all") {
        todos = this.todosFromApi;
      } else if (this.activeFilter === "open") {
        todos = this.todosFromApi.filter((todo) => todo.done === false);
      } else if (this.activeFilter === "done") {
        todos = this.todosFromApi.filter((todo) => todo.done === true);
      }
      return todos;
    },
  },
  methods: {
    async getTodos() {
      const res = await fetch(import.meta.env.VITE_BASE_URL);
      return await res.json();
    },

    async postTodo(e) {
      const newTodo = {
        description: e,
        done: false,
      };
      const res = await fetch(import.meta.env.VITE_BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodo),
      });

      this.todosFromApi.push(await res.json());
    },

    async deleteTodo(e) {
      await fetch(import.meta.env.VITE_BASE_URL + e, {
        method: "DELETE",
      });

      this.todosFromApi = await this.getTodos();
    },

    async onTodoCheck(e) {
      e.done = !e.done;
      const res = await fetch(import.meta.env.VITE_BASE_URL + e.id, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(e),
      });
      this.todosFromApi = await this.getTodos();
      return res;
    },

    setFilterMode(e) {
      this.activeFilter = e;
    },

    async removeDoneTodos() {
      const doneTodos = this.todosFromApi.filter((todo) => todo.done === true);

      doneTodos.forEach((todo) => {
        this.deleteTodo(todo.id);
      });
      this.todosFromApi = await this.getTodos();
    },
  },

  async created() {
    this.todosFromApi = await this.getTodos();
  },
};
</script>

<template>
  <main>
    <TodoInput @new-todo="postTodo" />
    <TodoList
      :todos="filteredTodos"
      @check-todo="onTodoCheck"
      @remove-todo="deleteTodo"
      @filter-toggle="setFilterMode"
      @update-todos="removeDoneTodos()"
    />
  </main>
</template>

<style scoped>
main {
  @apply container mx-auto py-8 px-4 xl:px-44;
}
</style>
