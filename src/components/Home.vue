<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./students/Card.vue";
</script>

<template>
  <primary-template>
    <h1>Here's some of my students:</h1>

    <div class="cards">
      <card
          last-name="Genius"
          first-name="Elanor"
          highest-edu-attained="Piled higher Deeper"
      />
      <card
          last-name="Brilliant"
          first-name="Tiffany"
          dob="January 1st 1990"
      />
      <card
          last-name="Amazing"
          first-name="Cara"
          dob="January 1st 2000"
      />
    </div>
  </primary-template>
</template>

<style scoped>
div.cards {
  display: flex;
  gap: 1rem;
}
</style>