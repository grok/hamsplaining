<template>
  <div class="page">
    <div class="hero">
      <h1 class="title">{{ page.title }}</h1>
      <p class="date"><strong>{{ page.taxonomy }}</strong> &mdash; {{ page.updatedAt | moment }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    page.keywords = page.keywords.split(',').map((term) => { return term.trim(); });

    return {
      page,
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, hh:mm');
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/styles/colors";

  .hero {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem 0 5rem;
    max-width: 60rem;
    padding-right: 5rem;
  }

  .date {
    color: $light;
    font-size: .75rem;
  }
</style>
