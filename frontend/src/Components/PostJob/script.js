// Module for PostJob form helpers and optional DOM enhancements.
export function validatePhone(phone) {
  if (!phone) return false
  const digits = String(phone).replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export function initPostJobForm() {
  // Attach non-invasive UI behaviors only if the expected DOM exists.
  const form = document.getElementById('contactForm')
  if (!form) return

  // Show success message on native submit (this is a fallback; React handles submission)
  const successMessage = document.getElementById('successMessage')
  form.addEventListener('reset', () => {
    if (successMessage) successMessage.style.display = 'none'
  })

  // Floating animation on scroll for decorative circles
  const circles = document.querySelectorAll('.floating-circle')
  if (circles.length) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      circles.forEach((circle, index) => {
        const speed = 0.5 + index * 0.1
        circle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
      })
    })
  }
}