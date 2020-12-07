<template>
  <div class="nuxt with-sidebar">
    <div class="sidebar">
      <Navigation />
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
  @import "~/assets/styles/colors";

  * {
    margin: 0;
    padding: 0;
  }
  body,
  html {
    height: 100%;
  }
  .content {
    background: $dark;
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
    min-height: 100vh;
  }
  .sidebar {
    background: $light;
    flex-basis: 20rem;
    flex-grow: 1;
    display: none;
  }
  .with-sidebar {
    display: flex;
    overflow: hidden;
    align-items: stretch;
    flex-wrap: wrap;
    height: 100%;
    .sidebar {
      display: block;
    }
  }
</style>
