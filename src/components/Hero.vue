<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/hero-bg.png"
        alt="Professional plumber at work"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-40">
      <div class="max-w-2xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          :class="{ 'animate-fade-in-up': isLoaded }"
        >
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-primary-200">Available 24/7 for Emergencies</span>
        </div>

        <!-- Headline -->
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          :class="{ 'animate-fade-in-up delay-100': isLoaded }"
        >
          Fast & Reliable
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            Plumbing Services
          </span>
          in Houston, Texas
        </h1>

        <!-- Subtext -->
        <p
          class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg"
          :class="{ 'animate-fade-in-up delay-200': isLoaded }"
        >
          From emergency repairs to routine maintenance, we're here to fix your plumbing issues quickly and professionally.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:flex-row gap-4"
          :class="{ 'animate-fade-in-up delay-300': isLoaded }"
        >
          <a
            href="tel:+18325551234"
            id="hero-call-now"
            class="inline-flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-primary-500/30 active:scale-95 animate-pulse-glow"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
          <a
            href="#contact"
            id="hero-get-quote"
            class="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold backdrop-blur-sm transition-all hover:shadow-lg active:scale-95"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Get a Free Quote
          </a>
        </div>

        <!-- Quick stats -->
        <div
          class="mt-12 flex items-center gap-8"
          :class="{ 'animate-fade-in-up delay-400': isLoaded }"
        >
          <div class="flex items-center gap-2">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary-400 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">★</div>
              <div class="w-8 h-8 rounded-full bg-accent-400 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">★</div>
              <div class="w-8 h-8 rounded-full bg-warning-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">★</div>
            </div>
            <div class="text-sm text-gray-300">
              <span class="font-bold text-white">4.9/5</span> from 100+ reviews
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  </section>
</template>
