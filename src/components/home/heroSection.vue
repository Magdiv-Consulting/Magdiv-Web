<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="content container">
      <h1>Building Secure Systems & Strong Teams for the Future</h1>

      <p class="subtitle">
        Our commitment is to deliver exceptional services characterized by quality,
        precision, and professionalism — evolving to meet modern challenges and expectations.
      </p>

      <div class="actions">
        <router-link to="/services" class="primary">Explore Services</router-link>
        <router-link to="/contact" class="secondary">Contact Us</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* FIXED BACKGROUND IMAGE — PARALLAX */
  background-image: url('@/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Dark overlay for readability */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 0, 40, 0.55);
  backdrop-filter: blur(2px);
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
}

h1 {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 900px;
  margin: 0 auto;
}

.subtitle {
  margin-top: 20px;
  font-size: 20px;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.actions {
  margin-top: 40px;
}

.primary,
.secondary {
  padding: 14px 30px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  margin: 8px;
}

.primary {
  background: var(--accent-orange);
  color: white;
  box-shadow: 0 6px 18px rgba(255, 140, 0, 0.35);
}

.secondary {
  border: 2px solid white;
  color: white;
}
</style>
