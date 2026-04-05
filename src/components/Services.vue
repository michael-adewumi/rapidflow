<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const services = [
  {
    icon: 'emergency',
    title: 'Emergency Plumbing',
    description: 'Burst pipes, major leaks, or flooding? We respond within 60 minutes to minimize damage and get your home back to normal fast.',
    color: 'from-red-500 to-orange-500',
    bg: 'bg-red-50',
    text: 'text-red-600',
  },
  {
    icon: 'leak',
    title: 'Leak Detection',
    description: 'Hidden leaks can cause thousands in damage. Our advanced detection finds the source quickly saving you money and stress.',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: 'drain',
    title: 'Drain Cleaning',
    description: 'Slow drains, foul odors, or complete blockages? We clear even the toughest clogs and prevent future backup problems.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    icon: 'heater',
    title: 'Water Heater Repair',
    description: 'No hot water? We repair and install all types of water heaters tank and tankless with same day service available.',
    color: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
  },
]
</script>

<template>
  <section id="services" ref="elementRef" class="py-20 sm:py-28 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-14" :class="{ 'animate-fade-in-up': isVisible }">
        <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">What We Do</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Our Plumbing Services
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Whether it's an emergency or scheduled maintenance, our licensed plumbers deliver fast, dependable solutions.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
            :class="service.bg"
          >
            <!-- Emergency -->
            <svg v-if="service.icon === 'emergency'" class="w-7 h-7" :class="service.text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <!-- Leak -->
            <svg v-if="service.icon === 'leak'" class="w-7 h-7" :class="service.text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <!-- Drain -->
            <svg v-if="service.icon === 'drain'" class="w-7 h-7" :class="service.text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <!-- Heater -->
            <svg v-if="service.icon === 'heater'" class="w-7 h-7" :class="service.text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 4.572V4.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v.322a6.51 6.51 0 001.362.642z" />
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ service.description }}</p>

          <!-- Hover accent -->
          <div class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" :class="service.color"></div>
        </div>
      </div>
    </div>
  </section>
</template>
