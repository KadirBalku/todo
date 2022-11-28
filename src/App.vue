<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoApp from "@/components/TodoApp.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: { TodoApp, TodoHeader, TodoFooter },
  data() {
    return {};
  },
};
</script>
<template>
  <TodoHeader />
  <TodoApp />
  <TodoFooter />
</template>
