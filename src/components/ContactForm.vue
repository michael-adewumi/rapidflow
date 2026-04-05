<script setup>
import { ref, reactive, computed } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const formData = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const hasAttemptedSubmit = ref(false)

const services = [
  'Emergency Plumbing',
  'Leak Detection',
  'Drain Cleaning',
  'Water Heater Repair',
  'Pipe Replacement',
  'Sewer Line Repair',
  'Other',
]

// US phone: max 10 digits (area code + number)
const MAX_PHONE_DIGITS = 10

// --- Validation helpers ---

function filterNameInput(event) {
  // Strip any digits from the input
  const filtered = event.target.value.replace(/[0-9]/g, '')
  formData.value.name = filtered
  if (hasAttemptedSubmit.value) validateName()
}

function filterPhoneInput(event) {
  // Strip anything that is not a digit, space, dash, parenthesis, or plus
  let raw = event.target.value.replace(/[^\d\s\-()+ ]/g, '')
  // Count digits only
  const digits = raw.replace(/\D/g, '')
  if (digits.length > MAX_PHONE_DIGITS) {
    // Trim from the end to enforce limit
    let count = 0
    let trimmed = ''
    for (const char of raw) {
      if (/\d/.test(char)) {
        count++
        if (count > MAX_PHONE_DIGITS) break
      }
      trimmed += char
    }
    raw = trimmed
  }
  formData.value.phone = raw
  if (hasAttemptedSubmit.value) validatePhone()
}

function handlePhoneKeydown(event) {
  // Allow: backspace, delete, tab, escape, enter, arrows
  const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']
  if (allowed.includes(event.key)) return

  // Allow Ctrl/Cmd + A, C, V, X
  if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) return

  // Allow: digits, spaces, dashes, parentheses, plus
  if (/[\d\s\-()+]/.test(event.key)) {
    // Check digit limit
    if (/\d/.test(event.key)) {
      const currentDigits = formData.value.phone.replace(/\D/g, '').length
      if (currentDigits >= MAX_PHONE_DIGITS) {
        event.preventDefault()
        return
      }
    }
    return
  }

  // Block everything else (alphabets, special chars)
  event.preventDefault()
}

function handleNameKeydown(event) {
  // Allow: backspace, delete, tab, escape, enter, arrows
  const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']
  if (allowed.includes(event.key)) return

  // Allow Ctrl/Cmd + A, C, V, X
  if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) return

  // Block digits
  if (/\d/.test(event.key)) {
    event.preventDefault()
    return
  }
}

function validateName() {
  if (!formData.value.name.trim()) {
    errors.name = 'Full name is required'
    return false
  }
  if (formData.value.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
    return false
  }
  errors.name = ''
  return true
}

function validatePhone() {
  const digits = formData.value.phone.replace(/\D/g, '')
  if (!digits) {
    errors.phone = 'Phone number is required'
    return false
  }
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit US phone number'
    return false
  }
  errors.phone = ''
  return true
}

function validateEmail() {
  if (!formData.value.email.trim()) {
    errors.email = 'Email address is required'
    return false
  }
  // Must have @ and a valid domain extension (e.g. .com, .net, .org)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(formData.value.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com)'
    return false
  }
  errors.email = ''
  return true
}

function validateService() {
  if (!formData.value.service) {
    errors.service = 'Please select a service'
    return false
  }
  errors.service = ''
  return true
}

// Message is optional — no validation needed

function validateAll() {
  const nameValid = validateName()
  const phoneValid = validatePhone()
  const emailValid = validateEmail()
  const serviceValid = validateService()
  return nameValid && phoneValid && emailValid && serviceValid
}

// Focus on the first invalid field
function focusFirstError() {
  if (errors.name) { document.getElementById('contact-name')?.focus(); return }
  if (errors.phone) { document.getElementById('contact-phone')?.focus(); return }
  if (errors.email) { document.getElementById('contact-email')?.focus(); return }
  if (errors.service) { document.getElementById('contact-service')?.focus(); return }
}

// Live validation on blur
function onBlurName() { if (hasAttemptedSubmit.value || formData.value.name) validateName() }
function onBlurPhone() { if (hasAttemptedSubmit.value || formData.value.phone) validatePhone() }
function onBlurEmail() { if (hasAttemptedSubmit.value || formData.value.email) validateEmail() }
function onBlurService() { if (hasAttemptedSubmit.value || formData.value.service) validateService() }


async function handleSubmit() {
  hasAttemptedSubmit.value = true

  if (!validateAll()) {
    focusFirstError()
    return
  }

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true

  setTimeout(() => {
    isSubmitted.value = false
    hasAttemptedSubmit.value = false
    formData.value = { name: '', phone: '', email: '', service: '', message: '' }
    Object.keys(errors).forEach(key => errors[key] = '')
  }, 5000)
}

function inputClass(fieldError) {
  return fieldError
    ? 'w-full px-4 py-3 rounded-xl border-2 border-red-400 bg-red-50/50 text-gray-900 placeholder-gray-400 focus:placeholder-transparent focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none transition-all'
    : 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:placeholder-transparent focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all'
}
</script>

<template>
  <section id="contact" ref="elementRef" class="py-20 sm:py-28 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Left: Info -->
        <div class="lg:col-span-2" :class="{ 'animate-slide-in-left': isVisible }">
          <span class="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Contact Us</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Get Your Free Quote Within 24 Hours
          </h2>
          <p class="text-lg text-gray-500 mb-8">
            No obligation. No pressure. Just honest answers and fair pricing.
          </p>

          <!-- Phone -->
          <div class="space-y-5">
            <a
              href="tel:+18325551234"
              class="flex items-center gap-4 bg-primary-50 hover:bg-primary-100 rounded-xl p-4 transition-colors group"
            >
              <div class="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">Call us directly</div>
                <div class="text-lg font-bold text-primary-600">(832) 555-1234</div>
              </div>
            </a>

            <div class="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
              <div class="w-12 h-12 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">Email us</div>
                <div class="text-base font-semibold text-gray-900">info@rapidflowplumbing.com</div>
              </div>
            </div>

            <div class="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
              <div class="w-12 h-12 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">Business hours</div>
                <div class="text-base font-semibold text-gray-900">24/7 Emergency Service</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-3" :class="{ 'animate-slide-in-right': isVisible }">
          <div class="bg-gray-50 rounded-2xl p-7 sm:p-9 border border-gray-100">
            <!-- Success State -->
            <div v-if="isSubmitted" class="text-center py-12">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
              <p class="text-gray-500">We'll get back to you within 24 hours. For immediate assistance, call us directly.</p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-5" novalidate>
              <div class="grid sm:grid-cols-2 gap-5">
                <!-- Full Name -->
                <div>
                  <label for="contact-name" class="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    :value="formData.name"
                    @input="filterNameInput"
                    @keydown="handleNameKeydown"
                    @blur="onBlurName"
                    type="text"
                    placeholder="John Smith"
                    autocomplete="name"
                    :class="inputClass(errors.name)"
                  />
                  <p v-if="errors.name" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Phone Number -->
                <div>
                  <label for="contact-phone" class="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    :value="formData.phone"
                    @input="filterPhoneInput"
                    @keydown="handlePhoneKeydown"
                    @blur="onBlurPhone"
                    type="tel"
                    inputmode="numeric"
                    placeholder="(832) 555-1234"
                    autocomplete="tel"
                    :class="inputClass(errors.phone)"
                  />
                  <p v-if="errors.phone" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.phone }}
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="contact-email" class="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  @blur="onBlurEmail"
                  type="email"
                  placeholder="john@example.com"
                  autocomplete="email"
                  :class="inputClass(errors.email)"
                />
                <p v-if="errors.email" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ errors.email }}
                </p>
              </div>

              <!-- Service Needed -->
              <div>
                <label for="contact-service" class="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Needed <span class="text-red-500">*</span>
                </label>
                <select
                  id="contact-service"
                  v-model="formData.service"
                  @blur="onBlurService"
                  @change="onBlurService"
                  :class="inputClass(errors.service)"
                  style="appearance: none;"
                >
                  <option value="" disabled>Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
                <p v-if="errors.service" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ errors.service }}
                </p>
              </div>

              <!-- Message (Optional) -->
              <div>
                <label for="contact-message" class="block text-sm font-medium text-gray-700 mb-1.5">
                  Tell Us About Your Issue <span class="text-xs text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model="formData.message"
                  rows="4"
                  placeholder="Describe your plumbing issue and we'll get back to you with an estimate..."
                  :class="inputClass('')"
                  style="resize: none;"
                ></textarea>
              </div>

              <button
                id="contact-submit"
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98] disabled:cursor-wait flex items-center justify-center gap-2"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Get Your Free Quote</span>
              </button>

              <p class="text-xs text-center text-gray-400">
                We typically respond within 2–4 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
