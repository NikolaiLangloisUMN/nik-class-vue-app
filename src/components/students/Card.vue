<script setup>

const fullName = (studentInfo) => {
  return studentInfo.first_name + " " + studentInfo.last_name;
}

const emailString = (str, email) => {
  if (email) {
    return '<a href="mailto:' + email + '">' + str + '</a>'
  }
}

defineProps({
  studentInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="student-card">
    <div class="headshot">
      <img :src="studentInfo.headshot" :alt="fullName(studentInfo)"/>
    </div>
    <div class="details">
      <p v-text="fullName(studentInfo)"></p>
      <p v-html="emailString('Email', studentInfo.email)"></p>
      <p>Attending {{ studentInfo.university }}</p>
    </div>
  </section>
</template>

<style scoped>
section.student-card {
  display: flex;
  flex-basis: 30%;
  border: 1px solid lightgray;
  border-radius: 10px;
  gap: 1rem;
  padding: 0.5rem;

  .headshot {
    min-width: 150px;
    max-width: 150px;

    img {
      width: 100%;
    }
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }
}
</style>