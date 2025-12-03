<template>
  <section class="container career">
    <h1>Career Opportunities</h1>

    <p class="subtitle">
      Join a team driven by excellence, innovation, and a passion for growth.
    </p>

    <div class="jobs">
      <JobCard 
        v-for="job in jobs" 
        :key="job.title"
        :title="job.title"
        :location="job.location"
        :type="job.type"
        :applyLink="job.link"
      />
    </div>
  </section>
</template>

<script setup>
import JobCard from '../components/career/jobCard.vue';

const jobs = [
  {
    title: "Penetration Tester",
    location: "Remote",
    type: "Full-time",
    link: "#"
  },
  {
    title: "Cybersecurity Analyst",
    location: "Hybrid",
    type: "Full-time",
    link: "#"
  },
  {
    title: "HR Consultant",
    location: "Jakarta",
    type: "Full-time",
    link: "#"
  }
];
</script>

<style scoped>
.career h1 {
  font-size: 42px;
  color: var(--purple-main);
}

.subtitle {
  margin-bottom: 35px;
}

.jobs {
  display: grid;
  gap: 25px;
}
</style>
