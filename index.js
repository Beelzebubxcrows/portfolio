// Hamburger menu toggle
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active')
  headerHamMenuBtn.classList.toggle('d-none')
  headerHamMenuCloseBtn.classList.toggle('d-none')
})

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
})

// Logo click
document.querySelector('.header__logo-container').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Scroll-triggered fade-in animations
const fadeElements = document.querySelectorAll('.fade-in')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.15 })

fadeElements.forEach(el => observer.observe(el))

// Header background on scroll
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 15, 0.95)'
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.85)'
  }
}, { passive: true })
