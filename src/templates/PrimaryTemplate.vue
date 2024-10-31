<script setup>

</script>

<template>
  <section class="primary-template">
    <header>My Students!</header>

    <section class="main">
      <slot></slot>
    </section>

    <footer>
      <div class="contents">
        <div>Go to top of page</div>
        <div>This year</div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
section.primary-template {

  section.main {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid red;
    padding: 1rem;
  }
}
</style>