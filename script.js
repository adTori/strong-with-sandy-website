  // Scrolled nav
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = `${(i % 4) * 0.1}s`;
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Form
  function handleSubmit() {
    const btn = document.querySelector('.contact-form-wrap .btn-primary');
    btn.textContent = '✓ Skickat!';
    btn.style.background = '#2d6e3e';
    setTimeout(() => {
      btn.textContent = 'Skicka meddelande';
      btn.style.background = '';
    }, 3000);
  }