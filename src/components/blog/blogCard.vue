<template>
  <div class="blog-card">
    <img :src="image" alt="" />

    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>

      <router-link :to="`/blog/${slug}`">Read More →</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  excerpt: String,
  slug: String
});
</script>

<style scoped>
.blog-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.content {
  padding: 18px;
}
</style>
