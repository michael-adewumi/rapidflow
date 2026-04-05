<template>
  <footer class="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <a href="#" class="flex items-center gap-2.5 mb-4">
            <img
              src="/logo.png"
              alt="RapidFlow Plumbing Logo"
              class="w-9 h-9 rounded-lg object-contain"
            />
            <div>
              <span class="text-white font-bold">RapidFlow</span>
              <span class="text-primary-400 font-bold"> Plumbing</span>
            </div>
          </a>
          <p class="text-sm leading-relaxed mb-4">
            Houston's trusted plumbing service. Fast response, honest pricing, and quality workmanship on every job.
          </p>
          <a
            href="tel:+18325551234"
            class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (832) 555-1234
          </a>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
          <ul class="space-y-2.5">
            <li><a href="#services" class="text-sm hover:text-white transition-colors">Emergency Plumbing</a></li>
            <li><a href="#services" class="text-sm hover:text-white transition-colors">Leak Detection</a></li>
            <li><a href="#services" class="text-sm hover:text-white transition-colors">Drain Cleaning</a></li>
            <li><a href="#services" class="text-sm hover:text-white transition-colors">Water Heater Repair</a></li>
            <li><a href="#services" class="text-sm hover:text-white transition-colors">Pipe Replacement</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
          <ul class="space-y-2.5">
            <li><a href="#why-choose-us" class="text-sm hover:text-white transition-colors">About Us</a></li>
            <li><a href="#projects" class="text-sm hover:text-white transition-colors">Recent Jobs</a></li>
            <li><a href="#testimonials" class="text-sm hover:text-white transition-colors">Reviews</a></li>
            <li><a href="#contact" class="text-sm hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Service Areas -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
          <ul class="space-y-2.5">
            <li><span class="text-sm">Houston, TX</span></li>
            <li><span class="text-sm">Katy, TX</span></li>
            <li><span class="text-sm">Sugar Land, TX</span></li>
            <li><span class="text-sm">The Woodlands, TX</span></li>
            <li><span class="text-sm">Pearland, TX</span></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">
          &copy; {{ new Date().getFullYear() }} RapidFlow Plumbing. All rights reserved. Licensed & Insured.
        </p>
        <div class="flex items-center gap-4">
          <span class="text-xs text-gray-500">TX Master Plumber License #MPL-12345</span>
        </div>
      </div>
    </div>
  </footer>
</template>
