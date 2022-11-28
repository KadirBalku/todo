<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer
    class="w-full py-6 text-sky-700 text-sm mt-auto mx-auto text-center bg-gradient-to-tr from-purple-400 via-indigo-400 to-sky-400"
  >
    <p class="text-xs italic">
      © {{ getYear }}
      <a
        href="https://github.com/KadirBalku"
        target="_blank"
        rel="noopener"
        class="lg:hover:underline lg:hover:font-semibold"
      >
        Kadir Balku
      </a>
    </p>
  </footer>
</template>
