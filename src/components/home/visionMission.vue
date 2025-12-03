<template>
  <section class="vm-wrapper">
    <div class="vm-section container">

      <!-- Vision -->
      <div class="card">
        <div class="icon-circle">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7z" 
                  stroke="#6A4FF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3" 
                    stroke="#6A4FF5" stroke-width="2"/>
          </svg>
        </div>

        <h2>Vision</h2>
        <p class="desc">
          To be the trusted partner empowering businesses to build a strong and secure
          digital foundation, as well as a competent team for sustainable growth.
        </p>
      </div>

      <!-- Mission -->
      <div class="card">
        <div class="icon-circle">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                  stroke="#6A4FF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h2>Mission</h2>
        <ul class="list">
          <li>
            Fortify your digital landscape with pragmatic, agile cybersecurity solutions
            that build trust and protect your future.
          </li>
          <li>
            Empower you to build and optimize competent teams, creating long-term impact
            through a merit-driven ethos.
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<style scoped>
.vm-wrapper {
  margin-top: -80px;
  padding: 120px 0;
  background: linear-gradient(135deg, #f6f5ff, #ffffff);
  border-radius: 40px 40px 0 0;
}

.vm-section {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #ffffff;
  width: 100%;
  max-width: 480px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
  text-align: center;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.10);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e6e0ff, #f9f8ff);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 18px auto;
}

h2 {
  font-size: 26px;
  font-weight: 800;
  color: var(--purple-main);
}

.desc {
  margin-top: 14px;
  font-size: 17px;
  line-height: 1.55;
}

.list {
  margin-top: 18px;
  text-align: left;
  padding-left: 18px;
  font-size: 17px;
  line-height: 1.6;
}
</style>
