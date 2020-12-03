<template>
  <div class="page">
    <Header />
    <div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
