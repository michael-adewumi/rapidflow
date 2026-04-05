<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const areas = [
  'Houston', 'Katy', 'Sugar Land', 'The Woodlands', 'Pearland',
  'Cypress', 'Spring', 'Missouri City', 'Richmond', 'Pasadena',
]
</script>

<template>
  <section ref="elementRef" class="py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: CTA -->
        <div :class="{ 'animate-slide-in-left': isVisible }">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Need a plumber
            <span class="text-accent-400">right now?</span>
          </h2>
          <p class="text-lg text-primary-100 mb-8 max-w-md">
            Whether it's a small fix or a major emergency, our team is ready. Fast response, fair prices, expert work.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+18325551234"
              id="cta-call-now"
              class="inline-flex items-center justify-center gap-3 bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:shadow-xl active:scale-95"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              id="cta-request-quote"
              class="inline-flex items-center justify-center gap-3 bg-primary-500/30 hover:bg-primary-500/50 text-white border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold backdrop-blur-sm transition-all hover:shadow-lg active:scale-95"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <!-- Right: Service Areas -->
        <div :class="{ 'animate-slide-in-right': isVisible }">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-7">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white">Service Areas</h3>
                <p class="text-sm text-primary-200">Serving the Greater Houston area</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="area in areas"
                :key="area"
                class="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 transition-colors cursor-default"
              >
                {{ area }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
