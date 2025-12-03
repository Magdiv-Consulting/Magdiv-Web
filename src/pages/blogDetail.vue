<template>
  <section class="container detail">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" class="hero-img" />

    <p class="content">{{ post.content }}</p>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

const post = ref({
  title: "Blog Post Title",
  content: "Full article content goes here...",
  image: "https://picsum.photos/1200/600"
});
</script>

<style scoped>
.hero-img {
  width: 100%;
  border-radius: var(--radius);
  margin: 25px 0;
}

.detail h1 {
  font-size: 38px;
  color: var(--purple-main);
}
</style>
