<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Houston, TX',
    rating: 5,
    text: 'They fixed my leak the same day I called. The plumber was professional, explained everything clearly, and the pricing was exactly what they quoted. I\'ve already recommended them to two neighbors.',
    service: 'Leak Repair',
  },
  {
    name: 'David & Maria R.',
    location: 'Katy, TX',
    rating: 5,
    text: 'Our water heater broke at 10 PM on a Saturday. RapidFlow answered immediately and had someone at our door within the hour. We had hot water again by midnight. Absolute lifesavers!',
    service: 'Emergency Water Heater',
  },
  {
    name: 'James T.',
    location: 'Sugar Land, TX',
    rating: 5,
    text: 'After getting quotes from three different plumbers, RapidFlow was the most honest and transparent. No upselling, no scare tactics. Just fair pricing and excellent work on our kitchen remodel plumbing.',
    service: 'Kitchen Plumbing',
  },
]

function getStars(rating) {
  return Array.from({ length: 5 }, (_, i) => i < rating)
}
</script>

<template>
  <section id="testimonials" ref="elementRef" class="py-20 sm:py-28 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-14" :class="{ 'animate-fade-in-up': isVisible }">
        <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Testimonials</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what real Houston homeowners have to say.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-7">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: `${(index + 1) * 0.15}s` }"
        >
          <!-- Quote icon -->
          <div class="text-primary-200 mb-4">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg
              v-for="(filled, i) in getStars(testimonial.rating)"
              :key="i"
              class="w-5 h-5"
              :class="filled ? 'text-yellow-400' : 'text-gray-200'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Text -->
          <p class="text-gray-600 leading-relaxed mb-6 text-sm">
            "{{ testimonial.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center justify-between">
            <div>
              <div class="font-bold text-gray-900 text-sm">{{ testimonial.name }}</div>
              <div class="text-xs text-gray-400">{{ testimonial.location }}</div>
            </div>
            <span class="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {{ testimonial.service }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
