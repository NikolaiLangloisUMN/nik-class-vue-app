<script setup>
import studentData from '../../MOCK_DATA.js'
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
<primary-template>
  <h1>All my students:</h1>

  <p v-for="(student, index) in studentData.data" :key="index">
    {{ student.first_name }} {{ student.last_name }}
  </p>
</primary-template>
</template>

<style scoped>

</style>