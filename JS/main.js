/* ═══════════════════════════════════════════
   HONEY BADGER CREDIT SOLUTIONS — main.js
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     1. NAVBAR — transparent → white on scroll
  ───────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ─────────────────────────────────────────
     2. ACTIVE NAV LINK — highlights current section
  ───────────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id], .hero[id]');
  const navLinks  = document.querySelectorAll('.nav-links .nav-link');

  const activateLink = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop    = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateLink);
  activateLink(); // run once on load


  /* ─────────────────────────────────────────
     3. MOBILE MENU — open / close
  ───────────────────────────────────────── */
  const menuToggle = document.getElementById('menuToggle');
  const mobMenu    = document.getElementById('mobMenu');
  const iconOpen   = document.getElementById('iconOpen');
  const iconClose  = document.getElementById('iconClose');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    iconOpen.style.display  = isOpen ? 'none' : '';
    iconClose.style.display = isOpen ? ''     : 'none';
  });

  window.closeMob = () => {
    mobMenu.classList.remove('open');
    document.body.style.overflow = '';
    iconOpen.style.display  = '';
    iconClose.style.display = 'none';
  };


  /* ─────────────────────────────────────────
     4. MARQUEE — build items dynamically
  ───────────────────────────────────────── */
  const marqueeItems = [
    { icon: 'bx-block',       text: 'Blacklist Assistance'  },
    { icon: 'bx-rotate-left', text: 'Debt Review Removal'   },
    { icon: 'bx-user-check',  text: 'Credit Rehabilitation' },
    { icon: 'bx-shield-alt-2',text: 'Fraud Assistance'      },
    { icon: 'bx-trending-up', text: 'Score Improvement'     },
    { icon: 'bx-bulb',        text: 'Credit Education'      },
    { icon: 'bx-medal',       text: 'Ethical Service'       },
    { icon: 'bx-search-alt',  text: 'Transparent Process'   },
    { icon: 'bx-line-chart',  text: 'Measurable Results'    },
    { icon: 'bx-trophy',      text: 'Financial Freedom'     },
  ];

  const track = document.getElementById('marq');

  if (track) {
    // duplicate for seamless infinite loop
    [...marqueeItems, ...marqueeItems].forEach(({ icon, text }) => {
      const span = document.createElement('span');
      span.className = 'm-item';
      span.innerHTML = `<i class='bx ${icon}'></i>${text}`;
      track.appendChild(span);
    });
  }


  /* ─────────────────────────────────────────
     5. SCROLL REVEAL — fade-up on enter
  ───────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ─────────────────────────────────────────
     6. CONTACT FORM — submit handler
  ───────────────────────────────────────── */
  const form    = document.getElementById('cForm');
  const success = document.getElementById('fsucc');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.btn-submit');
      btn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Sending...";
      btn.disabled = true;

      setTimeout(() => {
        if (success) {
          success.style.display = 'flex';
        }
        btn.innerHTML = "<i class='bx bx-check'></i> Sent!";
        form.reset();
      }, 1400);
    });
  }

  /* ─────────────────────────────────────────
     7. DYNAMIC YEAR — footer copyright
  ───────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

/* ═══════════════════════════════════════════
   HONEY BADGER CREDIT SOLUTIONS — main.js
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     1. NAVBAR — transparent → white on scroll
  ───────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ─────────────────────────────────────────
     2. ACTIVE NAV LINK — highlights current section
  ───────────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id], .hero[id]');
  const navLinks  = document.querySelectorAll('.nav-links .nav-link');

  const activateLink = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop    = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateLink);
  activateLink(); // run once on load


  /* ─────────────────────────────────────────
     3. MOBILE MENU — open / close
  ───────────────────────────────────────── */
  const menuToggle = document.getElementById('menuToggle');
  const mobMenu    = document.getElementById('mobMenu');
  const iconOpen   = document.getElementById('iconOpen');
  const iconClose  = document.getElementById('iconClose');

  if (menuToggle && mobMenu) {

    menuToggle.addEventListener('click', () => {
      const isOpen = mobMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (iconOpen)  iconOpen.style.display  = isOpen ? 'none' : '';
      if (iconClose) iconClose.style.display = isOpen ? ''     : 'none';
    });

    window.closeMob = () => {
      mobMenu.classList.remove('open');
      document.body.style.overflow = '';
      if (iconOpen)  iconOpen.style.display  = '';
      if (iconClose) iconClose.style.display = 'none';
    };

  }


  /* ─────────────────────────────────────────
     4. MARQUEE — build items dynamically
  ───────────────────────────────────────── */
  const marqueeItems = [
    { icon: 'bx-block',       text: 'Blacklist Assistance'  },
    { icon: 'bx-rotate-left', text: 'Debt Review Removal'   },
    { icon: 'bx-user-check',  text: 'Credit Rehabilitation' },
    { icon: 'bx-shield-alt-2',text: 'Fraud Assistance'      },
    { icon: 'bx-trending-up', text: 'Score Improvement'     },
    { icon: 'bx-bulb',        text: 'Credit Education'      },
    { icon: 'bx-medal',       text: 'Ethical Service'       },
    { icon: 'bx-search-alt',  text: 'Transparent Process'   },
    { icon: 'bx-line-chart',  text: 'Measurable Results'    },
    { icon: 'bx-trophy',      text: 'Financial Freedom'     },
  ];

  const track = document.getElementById('marq');

  if (track) {
    // duplicate for seamless infinite loop
    [...marqueeItems, ...marqueeItems].forEach(({ icon, text }) => {
      const span = document.createElement('span');
      span.className = 'm-item';
      span.innerHTML = `<i class='bx ${icon}'></i>${text}`;
      track.appendChild(span);
    });
  }


  /* ─────────────────────────────────────────
     5. SCROLL REVEAL — fade-up on enter
  ───────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ─────────────────────────────────────────
     6. CONTACT FORM — submit handler
  ───────────────────────────────────────── */
  const form    = document.getElementById('cForm');
  const success = document.getElementById('fsucc');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.btn-submit');
      btn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Sending...";
      btn.disabled = true;

      setTimeout(() => {
        if (success) {
          success.style.display = 'flex';
        }
        btn.innerHTML = "<i class='bx bx-check'></i> Sent!";
        form.reset();
      }, 1400);
    });
  }

  /* ─────────────────────────────────────────
     7. DYNAMIC YEAR — footer copyright
  ───────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

const scrollTopBtn = document.getElementById('scrollTop');
 
/* show after scrolling 300px down */
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
 
/* click — smooth scroll back to top */
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});