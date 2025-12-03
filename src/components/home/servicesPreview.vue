<template>
  <section class="services-section">
    <!-- Background gradient orbs -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>

    <div class="container">
      <h2 class="title">Our Core Services</h2>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.title">

          <!-- REMOVE LEFT BAR → deleted accent-bar -->

          <div class="content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
            <router-link :to="service.link" class="learn-more">
              Learn More →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Cybersecurity",
    desc: "Offensive Security, GRC, and Competency Development to safeguard your digital environment.",
    link: "/services/cybersecurity"
  },
  {
    title: "HR Services",
    desc: "Talent Acquisition, Training, and Organizational Development designed for sustainable growth.",
    link: "/services/hr"
  }
];
</script>

<style scoped>
/* Entire section */
.services-section {
  position: relative;
  padding: 140px 0;
  background: #0b0a14;
  color: white;
  overflow: hidden;
}

/* Blurred glowing background blobs */
.bg-blob {
  position: absolute;
  width: 360px;
  height: 360px;
  filter: blur(140px);
  opacity: 0.55;
  z-index: 0;
  border-radius: 50%;
}
.blob-1 {
  background: #7a5cff;
  top: -80px;
  left: -60px;
}
.blob-2 {
  background: #ff7c58;
  bottom: -80px;
  right: -40px;
}

.container {
  position: relative;
  z-index: 2;
}

/* Title */
.title {
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 70px;
}

/* 2-column grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Service card */
.service-card {
  display: flex;
  flex-direction: column; /* Added for better structure after removing bar */
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  border-radius: 18px;
  overflow: hidden;
  transition: 0.28s ease;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
}

/* Hover neon glow */
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 
    0 0 25px rgba(145, 100, 255, 0.45),
    0 0 55px rgba(255, 120, 90, 0.35);
}

/* REMOVED:
.accent-bar {
  width: 12px;
  background: linear-gradient(180deg, #906cff, #ff855e);
}
*/

/* Card inner content */
.content {
  padding: 30px 32px;
}

h3 {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #daceff;
}

p {
  opacity: 0.92;
  line-height: 1.55;
  font-size: 17px;
  margin-bottom: 18px;
}

/* Neon-style link */
.learn-more {
  font-weight: 700;
  color: #ffbe8c;
  transition: 0.2s ease;
}
.learn-more:hover {
  color: #ffd4b5;
}
</style>
