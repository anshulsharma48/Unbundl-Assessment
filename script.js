// JavaScript for Clove Dental Landing Page

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Why Choose Us Accordion
  const accItems = document.querySelectorAll('.acc-item');
  accItems.forEach(item => {
    const head = item.querySelector('.acc-head');
    head.addEventListener('click', () => {
      // Close other items
      accItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.acc-sign').textContent = '+';
        }
      });

      // Toggle current item
      const isActive = item.classList.toggle('active');
      item.querySelector('.acc-sign').textContent = isActive ? '-' : '+';
    });
  });

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      item.querySelector('span').textContent = isOpen ? '×' : '+';
    });
  });

  // 4. Consultation Form Submission & Validation
  const consultForm = document.getElementById('consultForm');
  const formMsg = document.getElementById('formMsg');
  const captchaInput = document.getElementById('captcha');

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const captchaVal = captchaInput.value.trim();

      // Basic Phone validation (10 digits)
      if (phone.length !== 10 || isNaN(phone)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      // Check Captcha
      if (captchaVal !== '1514') {
        alert('Incorrect captcha code. Please enter 1514.');
        return;
      }

      // Show success message
      formMsg.textContent = `Thank you ${name}! We have received your request and our clinic team will call you shortly.`;
      formMsg.style.display = 'block';

      consultForm.reset();
    });
  }

});
