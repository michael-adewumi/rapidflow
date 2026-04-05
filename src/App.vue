<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TrustBar from './components/TrustBar.vue'
import Services from './components/Services.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import Projects from './components/Projects.vue'
import BeforeAfter from './components/BeforeAfter.vue'
import Testimonials from './components/Testimonials.vue'
import CTA from './components/CTA.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import FloatingChat from './components/FloatingChat.vue'
import MobileBottomBar from './components/MobileBottomBar.vue'
</script>

<template>
  <div class="font-sans antialiased text-gray-900">
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Projects />
      <BeforeAfter />
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
    <Footer />
    <FloatingChat />
    <MobileBottomBar />
  </div>
</template>
