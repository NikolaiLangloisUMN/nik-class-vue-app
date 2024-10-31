<script setup>

defineProps({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: false,
    default: '01/01/1980'
  },
  highestEduAttained: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="card">
    <aside class="left-side">
      <div class="headshot"/>
      <span class="dob">{{ dob }}</span>
    </aside>
    <aside class="right-side">
      <div class="name">{{ lastName }}, {{ firstName }}</div>
      <p class="eduAttainment" v-text="highestEduAttained"></p>
    </aside>
  </section>

</template>

<style scoped>
section.card {
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  gap: 1rem;
  padding: 0.5rem;

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  .left-side, .right-side {
    display: flex;
    flex-direction: column;
  }

  .left-side {
    flex-basis: 40%;
    display: flex;
    gap: 0.5rem;

    .headshot {
      height: 120px;
      width: 90px;
      background-color: lightgray;
    }

    .dob {
      font-size: 0.8rem;
      font-style: italic;
    }
  }

  .right-side {
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>