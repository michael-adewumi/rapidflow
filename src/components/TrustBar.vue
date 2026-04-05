<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const trustItems = [
  {
    icon: 'clock',
    title: '24/7 Emergency Service',
    subtitle: 'Always available',
  },
  {
    icon: 'shield',
    title: 'Licensed & Insured',
    subtitle: 'Fully certified',
  },
  {
    icon: 'bolt',
    title: 'Same Day Service',
    subtitle: 'Fast response',
  },
  {
    icon: 'users',
    title: '100+ Happy Customers',
    subtitle: 'Trusted locally',
  },
]
</script>

<template>
  <section ref="elementRef" class="relative -mt-8 z-20 px-4 sm:px-6">
    <div
      class="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-900/10 overflow-hidden"
      :class="{ 'animate-fade-in-up': isVisible }"
    >
      <div class="grid grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in trustItems"
          :key="item.title"
          class="flex items-center gap-3 p-5 sm:p-6 group hover:bg-primary-50/50 transition-colors"
          :class="{ 'border-r border-gray-100': index < trustItems.length - 1, 'border-b border-gray-100 lg:border-b-0': index < 2 }"
        >
          <!-- Clock Icon -->
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
            <svg v-if="item.icon === 'clock'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-if="item.icon === 'shield'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <svg v-if="item.icon === 'bolt'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <svg v-if="item.icon === 'users'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-sm sm:text-base font-bold text-gray-900 truncate">{{ item.title }}</div>
            <div class="text-xs sm:text-sm text-gray-500">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
