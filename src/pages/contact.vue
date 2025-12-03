<template>
  <section class="container contact">
    <h1>Contact Us</h1>

    <form @submit.prevent="submitForm" class="form">
      <div class="field">
        <label>Name</label>
        <input v-model="form.name" type="text" required />
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model="form.email" type="email" required />
      </div>

      <div class="field">
        <label>Company</label>
        <input v-model="form.company" type="text" />
      </div>

      <div class="field">
        <label>Message</label>
        <textarea v-model="form.message" rows="5" required></textarea>
      </div>

      <button class="submit">Submit Message</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  company: "",
  message: ""
});

const submitForm = () => {
  alert("Thank you! Our team will contact you shortly.");
};
</script>

<style scoped>
.contact h1 {
  font-size: 42px;
  color: var(--purple-main);
  margin-bottom: 30px;
}

.form {
  background: white;
  padding: 35px;
  border-radius: var(--radius);
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
}

.field {
  margin-bottom: 18px;
}

label {
  display: block;
  font-weight: 700;
  margin-bottom: 6px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: var(--radius);
  border: 1px solid #ccc;
  font-family: inherit;
}

.submit {
  background: var(--accent-orange);
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: var(--radius);
  font-weight: 700;
  cursor: pointer;
}
</style>
