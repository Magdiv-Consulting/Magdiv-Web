import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Contact from '../pages/career.vue';
import Career from '../pages/career.vue';
import Blog from '../pages/Blog.vue';
import BlogDetail from '../pages/blogDetail.vue';

// Services
import Services from '../pages/services/services.vue';
import Cybersecurity from '../pages/services/cybersecurity.vue';
import HRServices from '../pages/services/HRServices.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/career', component: Career },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: BlogDetail },

  // Services
  { path: '/services', component: Services },
  { path: '/services/cybersecurity', component: Cybersecurity },
  { path: '/services/hr', component: HRServices },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
