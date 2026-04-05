<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const comparisons = [
  {
    beforeImage: '/before-pipes.png',
    afterImage: '/after-pipes.png',
    title: 'Pipe Replacement – Bathroom',
    description: 'Replaced corroded copper pipes with modern PEX plumbing. No more leaks or water damage.',
  },
  {
    beforeImage: '/before-drain.png',
    afterImage: '/after-drain.png',
    title: 'Drain Restoration – Kitchen',
    description: 'Cleared years of buildup and restored full drainage. Kitchen sink works like new.',
  },
]

const activeSliders = ref(comparisons.map(() => 50))

function handleSlider(index, event) {
  activeSliders.value[index] = event.target.value
}
</script>

<template>
  <section id="before-after" ref="elementRef" class="py-20 sm:py-28 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-14" :class="{ 'animate-fade-in-up': isVisible }">
        <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">See the Difference</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Before & After
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Slide to see the transformation. Real jobs, real results from Houston homes.
        </p>
      </div>

      <!-- Comparisons -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(comparison, index) in comparisons"
          :key="comparison.title"
          class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: `${(index + 1) * 0.15}s` }"
        >
          <!-- Slider -->
          <div class="relative h-72 sm:h-80 overflow-hidden select-none">
            <!-- After Image (full width background) -->
            <img
              :src="comparison.afterImage"
              :alt="'After: ' + comparison.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Before Image (clipped) -->
            <div
              class="absolute inset-0 overflow-hidden"
              :style="{ width: activeSliders[index] + '%' }"
            >
              <img
                :src="comparison.beforeImage"
                :alt="'Before: ' + comparison.title"
                class="absolute inset-0 w-full h-full object-cover"
                :style="{ minWidth: '100%', width: (100 / activeSliders[index]) * 100 + '%', maxWidth: 'none' }"
              />
            </div>
            <!-- Divider Line -->
            <div
              class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
              :style="{ left: activeSliders[index] + '%' }"
            >
              <!-- Handle -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab">
                <svg class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>
            <!-- Labels -->
            <div class="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
              BEFORE
            </div>
            <div class="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
              AFTER
            </div>
            <!-- Slider Input -->
            <input
              type="range"
              min="5"
              max="95"
              :value="activeSliders[index]"
              class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              @input="handleSlider(index, $event)"
            />
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3 class="font-bold text-gray-900 mb-1">{{ comparison.title }}</h3>
            <p class="text-sm text-gray-500">{{ comparison.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
