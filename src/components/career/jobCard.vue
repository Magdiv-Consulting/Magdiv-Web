<template>
  <div class="job-card">
    <h3>{{ title }}</h3>
    <p class="meta">{{ location }} • {{ type }}</p>

    <router-link :to="applyLink">Apply Now →</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  location: String,
  type: String,
  applyLink: String
});
</script>

<style scoped>
.job-card {
  padding: 25px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}
</style>
