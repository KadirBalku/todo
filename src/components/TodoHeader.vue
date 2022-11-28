<template>
  <header>
    <div>
      <h1>
        " Don’t settle for what life gives you; make life better and build
        something. "
      </h1>
      <div class="header-mask"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  @apply shrink-0 h-1/4 bg-header-landscape bg-center  bg-no-repeat bg-cover relative;
}
div {
  @apply flex items-center justify-center h-full;
}
h1 {
  @apply font-extrabold text-xl text-center sm:text-3xl p-4 text-white z-30;
  filter: drop-shadow(5px 5px 2px rgba(12, 74, 110, 0.7));
}
.header-mask {
  @apply absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-sky-400  via-indigo-400 to-purple-400 opacity-70;
}
</style>
