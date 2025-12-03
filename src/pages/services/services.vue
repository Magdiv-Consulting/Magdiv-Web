<template>
  <section class="container services">
    <h1>Our Services</h1>

    <div class="grid">
      <router-link to="/services/cybersecurity" class="card">
        <h2>Cybersecurity</h2>
        <p>
          Offensive Security, GRC, and Competency Development to protect and reinforce your digital landscape.
        </p>
      </router-link>

      <router-link to="/services/hr" class="card">
        <h2>HR Services</h2>
        <p>
          Talent Acquisition, Training, Job Evaluation, Organization Design, and more.
        </p>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.services h1 {
  font-size: 42px;
  margin-bottom: 25px;
  color: var(--purple-main);
}

.grid {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.card {
  background: white;
  padding: 30px;
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--black);
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
</style>
