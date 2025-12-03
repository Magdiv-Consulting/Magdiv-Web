<template>
  <section class="container blog">
    <h1>Insights & Articles</h1>

    <div class="grid">
      <BlogCard 
        v-for="post in posts" 
        :key="post.slug"
        :title="post.title"
        :image="post.image"
        :excerpt="post.excerpt"
        :slug="post.slug"
      />
    </div>
  </section>
</template>

<script setup>
import BlogCard from '../components/blog/blogCard.vue';

const posts = [
  {
    title: "Why Offensive Security Matters",
    excerpt: "Modern threats require proactive assessment...",
    slug: "offensive-security",
    image: "https://picsum.photos/600/400?1"
  },
  {
    title: "Building a Competency Framework",
    excerpt: "Your organization’s foundation starts with the right people...",
    slug: "competency-framework",
    image: "https://picsum.photos/600/400?2"
  }
];
</script>

<style scoped>
.blog h1 {
  font-size: 42px;
  color: var(--purple-main);
}

.grid {
  margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
