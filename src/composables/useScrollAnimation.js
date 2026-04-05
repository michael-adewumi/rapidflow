import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(options = {}) {
  const elementRef = ref(null)
  const isVisible = ref(false)

  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  let observer = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { elementRef, isVisible }
}
