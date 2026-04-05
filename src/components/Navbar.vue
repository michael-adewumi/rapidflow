<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-18">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="RapidFlow Plumbing Logo"
            class="w-10 h-10 rounded-lg object-contain shadow-md group-hover:shadow-lg transition-shadow"
          />
          <div>
            <span class="text-lg font-bold transition-colors" :class="isScrolled ? 'text-gray-900' : 'text-white'">
              RapidFlow
            </span>
            <span class="text-lg font-bold text-primary-500"> Plumbing</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium transition-colors hover:text-primary-500"
            :class="isScrolled ? 'text-gray-700' : 'text-white/90'"
          >
            {{ link.label }}
          </a>
          <a
            href="tel:+18325551234"
            class="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (832) 555-1234
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          id="mobile-menu-toggle"
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
        <div class="px-4 py-4 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <div class="pt-3 border-t border-gray-100">
            <a
              href="tel:+18325551234"
              class="flex items-center justify-center gap-2 bg-primary-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors"
              @click="closeMobileMenu"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (832) 555-1234
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
