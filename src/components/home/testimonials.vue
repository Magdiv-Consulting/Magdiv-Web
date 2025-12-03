<template>
  <section class="testimonials container">
    <h2 class="title">What Our Clients Say</h2>

    <div class="slider">
      <div
        class="card"
        v-for="(item, index) in testimonials"
        :key="index"
        :class="{ active: index === activeIndex }"
      >
        <img :src="item.logo" class="logo" />
        <h3 class="name">{{ item.name }}</h3>
        <p class="role">{{ item.role }}</p>
        <p class="quote">“{{ item.message }}”</p>
      </div>
    </div>

    <div class="dots">
      <span
        v-for="(item, idx) in testimonials"
        :key="idx"
        :class="{ active: idx === activeIndex }"
        @click="activeIndex = idx"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeIndex = ref(0);

const testimonials = [
  {
    logo: "@/assets/images/client1.png",
    name: "John Carter",
    role: "CTO, Fintech Corp",
    message:
      "Their cybersecurity and talent support helped us scale with confidence. Professional and reliable team!"
  },
  {
    logo: "@/assets/images/client2.png",
    name: "Maria Diaz",
    role: "HR Director, InnovateX",
    message:
      "Their training and hiring services transformed our tech team. Highly recommended!"
  }
];

onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
  }, 5000);
});
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 50px;
}

.slider {
  display: flex;
  overflow: hidden;
  justify-content: center;
}

.card {
  min-width: 60%;
  max-width: 600px;
  background: white;
  padding: 40px;
  border-radius: 18px;
  text-align: center;
  opacity: 0;
  transform: translateX(60px);
  transition: 0.6s ease;
  box-shadow: 0 12px 25px rgba(0,0,0,0.1);
}

.card.active {
  opacity: 1;
  transform: translateX(0);
}

.logo {
  width: 80px;
  margin-bottom: 14px;
}

.name {
  font-size: 22px;
  font-weight: 700;
}

.role {
  color: #666;
  margin-bottom: 16px;
}

.quote {
  font-size: 18px;
  line-height: 1.5;
  color: #333;
}

/* Slider dots */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dots span {
  width: 12px;
  height: 12px;
  margin: 6px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
}

.dots span.active {
  background: var(--accent-orange);
}
</style>
