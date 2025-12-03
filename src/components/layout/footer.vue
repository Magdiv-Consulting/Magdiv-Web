<template>
  <footer class="footer">
    <div class="container footer-grid">

      <!-- Brand / About -->
      <div class="logo-wrapper">
        <img src="@/assets/images/companyLogoFooter.png" alt="Logo" class="logo-img" />
        <p class="about-text">
          Delivering cybersecurity and HR solutions with precision, quality, 
          and trusted expertise.
        </p>

        <div class="socials">
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/career">Career</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="footer-col">
        <h3>Our Services</h3>
        <ul>
          <li><router-link to="/services/cybersecurity">Cybersecurity</router-link></li>
          <li><router-link to="/services/hr">HR Services</router-link></li>
          <li><router-link to="/blog">Blog / Insights</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>Email: marcom@magdiv.co.id</li>
          <li>Phone: +62 811-1999-837</li>
          <li>Menara Cakrawala, Menara Cakrawala 12th Floor Unit 5A, Jl. M.H. Thamrin No.Kav. 9, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340</li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} PT. Magna Digita Ventura — All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #131113;
  color: #F5F4F4;
  padding: 60px 0 25px;
  font-family: "Nunito", sans-serif;
}

.footer-grid {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.logo {
  font-size: 28px;
  font-weight: 800;
  color: #FF8A36;
}

.about-text {
  opacity: 0.9;
  margin: 10px 0 20px;
  line-height: 1.6;
}

.footer-col h3 {
  font-size: 18px;
  color: #ADA0F5;
  margin-bottom: 15px;
}

.footer-col ul {
  padding: 0;
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 8px;
  opacity: 0.9;
}

.footer-col ul li a {
  color: #F5F4F4;
  text-decoration: none;
  transition: 0.2s;
}

.footer-col ul li a:hover {
  color: #FF8A36;
}

/* Social icons */
.socials a {
  margin-right: 12px;
  color: #ADA0F5;
  font-size: 20px;
  transition: 0.2s;
}

.socials a:hover {
  color: #FF8A36;
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  opacity: 0.7;
  font-size: 14px;
}

.logo-img {
  height: 120px;
  width: auto;
  object-fit: contain;
  transition: transform 0.35s ease, filter 0.35s ease;
}
</style>
