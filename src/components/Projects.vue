<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const projects = [
  {
    image: '/project-pipe-repair.png',
    title: 'Emergency Pipe Repair – Houston Heights',
    description: 'Responded to a major pipe burst in a family home. Located the damage, replaced the section, and restored water flow.',
    time: '2 hours',
    tag: 'Emergency',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    image: '/project-water-heater.png',
    title: 'Tankless Water Heater Install – Katy',
    description: 'Replaced an aging 40 gallon tank with a high efficiency tankless unit. Family now saves 30% on water heating costs.',
    time: '4 hours',
    tag: 'Installation',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    image: '/project-drain.png',
    title: 'Drain Cleaning & Camera Inspection – Sugar Land',
    description: 'Cleared severe root intrusion in main sewer line using hydro jetting. Confirmed clear flow with camera inspection.',
    time: '3 hours',
    tag: 'Maintenance',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
]
</script>

<template>
  <section id="projects" ref="elementRef" class="py-20 sm:py-28 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-14" :class="{ 'animate-fade-in-up': isVisible }">
        <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Our Work</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Recent Jobs
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Real results from real homes in the Houston area. Here's a look at what we've been working on.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-3 gap-7">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: `${(index + 1) * 0.15}s` }"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-52">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-3 left-3">
              <span class="text-xs font-semibold px-3 py-1 rounded-full" :class="project.tagColor">
                {{ project.tag }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              {{ project.description }}
            </p>

            <!-- Time -->
            <div class="flex items-center gap-2 text-sm text-gray-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Completed in <strong class="text-gray-600">{{ project.time }}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
