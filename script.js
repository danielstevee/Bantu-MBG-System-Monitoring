(function() {
  'use strict';

  const CONFIG = {
    animationThreshold: 0.15,
    animationRootMargin: '0px 0px -50px 0px'
  };

  const fadeElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');

  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: CONFIG.animationRootMargin,
      threshold: CONFIG.animationThreshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
  }

  function initCardHoverEffects() {
    const cards = document.querySelectorAll('.challenge-card, .platform-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });
  }

  function initLoadingAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });
  }

  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  function init() {
    initScrollAnimations();
    initCardHoverEffects();
    initLoadingAnimation();
    initKeyboardNav();

    console.log('🚀 Bantu MBG initialized successfully!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();