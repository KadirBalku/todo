<template>
  <div class="btn-wrapper">
    <div id="filter">
      <button
        class="btn"
        :class="{ active: isAll }"
        id="all"
        @click="onFilterClick"
      >
        All
      </button>
      <button
        class="btn"
        :class="{ active: isOpen }"
        id="open"
        @click="onFilterClick"
      >
        Open
      </button>
      <button
        class="btn"
        :class="{ active: isDone }"
        id="done"
        @click="onFilterClick"
      >
        Done
      </button>
    </div>
    <button class="btn" id="del-done" @click="$emit('removeDone')">
      Remove completed
    </button>
  </div>
</template>

<script>
export default {
  emits: ["filterChange", "removeDone"],
  data() {
    return { isAll: true, isDone: false, isOpen: false };
  },
  methods: {
    onFilterClick(event) {
      const el = event.target;
      if (el.id === "all") {
        this.isAll = true;
        this.isDone = false;
        this.isOpen = false;
        this.$emit("filterChange", el.id);
      } else if (el.id === "done") {
        this.isAll = false;
        this.isDone = true;
        this.isOpen = false;
        this.$emit("filterChange", el.id);
      } else if (el.id === "open") {
        this.isAll = false;
        this.isDone = false;
        this.isOpen = true;
        this.$emit("filterChange", el.id);
      }
    },
  },
};
</script>

<style scoped>
.btn-wrapper {
  @apply flex w-full justify-between  bg-purple-900 text-sm py-2 px-2 rounded-t-lg select-none text-gray-700;
}
.btn {
  @apply rounded px-2 py-1 sm:hover:bg-white hover:shadow focus:outline-none text-white hover:text-black font-semibold;
}

#del-done:active,
#del-done:focus {
  @apply bg-white text-black;
}
.active {
  @apply bg-white text-black;
}
</style>
