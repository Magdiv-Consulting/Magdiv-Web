<template>
  <section class="container about">
    <h1>About Us</h1>

    <div class="card">
      <h2>Our Commitment</h2>
      <p>
        Our commitment is to deliver exceptional services characterized by quality, precision, 
        and professionalism. We uphold high standards to provide value and build trust with 
        clients, while evolving to meet modern challenges and expectations.
      </p>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Vision</h2>
        <p>
          To be the trusted partner empowering businesses to build a strong and secure digital 
          foundation, as well as a competent team for sustainable growth.
        </p>
      </div>

      <div class="card">
        <h2>Mission</h2>
        <ul>
          <li>
            Fortify your digital landscape with pragmatic, agile cybersecurity solutions 
            that build trust and protect your future.
          </li>
          <li>
            Empower you to build and optimize competent teams for sustainable growth through 
            a merit-driven ethos.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about h1 {
  font-size: 42px;
  color: var(--purple-main);
  margin-bottom: 20px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: var(--radius);
  margin-bottom: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
}

.grid {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
