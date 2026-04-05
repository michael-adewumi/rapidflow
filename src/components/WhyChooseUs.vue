<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const reasons = [
  {
    icon: 'clock',
    title: 'Fast Response Times',
    description: 'We arrive within 60 minutes for emergencies. No long wait times or missed appointments.',
    stat: '< 60 min',
    statLabel: 'Response time',
  },
  {
    icon: 'dollar',
    title: 'Honest, Upfront Pricing',
    description: 'Get a clear quote before we start. No hidden fees, no surprise charges ever.',
    stat: '$0',
    statLabel: 'Hidden fees',
  },
  {
    icon: 'wrench',
    title: 'Experienced Plumbers',
    description: 'Our team has 15+ years of experience solving every plumbing problem imaginable.',
    stat: '15+',
    statLabel: 'Years experience',
  },
  {
    icon: 'check',
    title: 'Guaranteed Satisfaction',
    description: 'We stand behind every job. If you are not happy, we will make it right guaranteed.',
    stat: '100%',
    statLabel: 'Satisfaction rate',
  },
]
</script>

<template>
  <section id="why-choose-us" ref="elementRef" class="py-20 sm:py-28 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <!-- Left: Content -->
        <div :class="{ 'animate-slide-in-left': isVisible }">
          <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Why Choose Us</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Houston's Most
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Trusted</span>
            Plumbing Team
          </h2>
          <p class="text-lg text-gray-500 mb-8">
            We know plumbing problems are stressful. That's why we've built our business around speed, honesty, and quality craftsmanship so you can relax while we handle it.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
          >
            Get a Free Estimate
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <!-- Right: Cards -->
        <div class="grid sm:grid-cols-2 gap-5" :class="{ 'animate-slide-in-right': isVisible }">
          <div
            v-for="(reason, index) in reasons"
            :key="reason.title"
            class="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all group"
          >
            <!-- Stat badge -->
            <div class="absolute -top-3 -right-3 bg-gradient-to-br from-primary-500 to-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {{ reason.stat }}
            </div>

            <!-- Icon -->
            <div class="w-11 h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
              <svg v-if="reason.icon === 'clock'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-if="reason.icon === 'dollar'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-if="reason.icon === 'wrench'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L15.17 4.43a1.5 1.5 0 012.12 0l2.83 2.83a1.5 1.5 0 010 2.12l-7.75 7.75" />
              </svg>
              <svg v-if="reason.icon === 'check'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>

            <h3 class="font-bold text-gray-900 mb-1.5">{{ reason.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
