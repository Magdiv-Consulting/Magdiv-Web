<template>
  <nav class="navbar">
    <div class="container nav-inner">

      <!-- LOGO -->
      <div class="logo-wrapper">
        <img src="@/assets/images/companyLogo.png" alt="Logo" class="logo-img" />
      </div>

      <!-- NAV LINKS -->
      <ul :class="['nav-links', { open: mobileOpen }]">

        <li>
          <router-link to="/">Home</router-link>
        </li>

        <!-- DROPDOWN -->
        <li class="dropdown">
          <button class="dropdown-btn" @click="toggleDropdown">
            Our Services ▾
          </button>
          <ul class="dropdown-menu" v-show="dropdownOpen">
            <li><router-link to="/services/cybersecurity">Cybersecurity</router-link></li>
            <li><router-link to="/services/hr">HR Services</router-link></li>
          </ul>
        </li>

        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/career">Career</router-link></li>

        <!-- CTA -->
        <li>
          <router-link to="/contact" class="cta">Contact</router-link>
        </li>
      </ul>

      <!-- MOBILE MENU -->
      <div class="mobile-menu" @click="toggleMobile">
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileOpen = ref(false);
const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;

  if (!mobileOpen.value) dropdownOpen.value = false;
}
</script>

<style scoped>
/* NAVBAR */
.navbar {
  background: white;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 900;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO */
.logo-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-img {
  height: 65px;
  width: auto;
  object-fit: contain;
  transition: transform 0.35s ease, filter 0.35s ease;
}

/* Smooth modern hover animation */
.logo-img:hover {
  transform: scale(1.07);
  filter: brightness(1.1);
}

/* NAV LINKS */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--black);
  font-weight: 600;
  font-size: 16px;
  position: relative;
  padding-bottom: 4px;
  transition: 0.3s ease;
}

/* Modern line hover */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 3px;
  background: var(--purple-main);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--purple-main);
}

.nav-links a:hover::after {
  width: 100%;
}

/* CTA (Contact button) */
.cta {
  background: var(--accent-orange);
  color: white !important;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 800;
  transition: 0.28s ease;
}

.cta:hover {
  background: var(--purple-main) !important;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(73, 50, 160, 0.3);
}

/* DROPDOWN */
.dropdown {
  position: relative;
}

.dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  color: var(--black);
}

.dropdown-menu {
  position: absolute;
  top: 36px;
  left: 0;
  width: 220px;
  background: #fff;
  border-radius: 12px;
  padding: 12px 0;
  list-style: none;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  animation: fadeIn 0.25s ease;
}

.dropdown-menu li {
  padding: 12px 20px;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* HAMBURGER MENU */
.mobile-menu {
  display: none;
  cursor: pointer;
}

.mobile-menu span {
  width: 28px;
  height: 3px;
  background: #333;
  margin: 4px;
  transition: 0.35s;
}

/* Hamburger → X */
.mobile-menu span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.mobile-menu span.open:nth-child(2) {
  opacity: 0;
}
.mobile-menu span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* MOBILE STYLE */
@media (max-width: 820px) {

  .mobile-menu {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    right: 0;
    width: 75%;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    padding: 40px 20px;
    transform: translateX(100%);
    transition: 0.35s ease;
    gap: 32px;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .dropdown-menu {
    position: relative;
    top: 0;
    box-shadow: none;
  }
}
</style>
