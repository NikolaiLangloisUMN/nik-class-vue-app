<script setup>
import studentData from '../../MOCK_DATA.js'
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import Card from "./Card.vue";
</script>

<template>
  <primary-template>
    <h1>All my students:</h1>

    <section class="cards">
      <card v-for="(student, index) in studentData.data"
            :key="index" :student-info="student"/>
    </section>
  </primary-template>
</template>

<style scoped>
section.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
}
</style>