/**
 * Mobile menu toggle functionality
 * Handles hamburger menu click and animations
 */
$(function() {
  let menuOpen = false;

  $('.menuAc').on('click', function(e) {
    e.preventDefault();
    menuOpen = !menuOpen;

    // Toggle mobile menu visibility
    $(this).next('.menuMobil').animate({ width: 'toggle' }, 350);

    // Update aria-expanded for accessibility
    $(this).attr('aria-expanded', menuOpen);

    // Apply blur effect to background content
    if (menuOpen) {
      $('.baslik').css({ filter: 'blur(5px)' });
      $('.orta').css({ filter: 'blur(5px)' });
      $('.social-links').css({ filter: 'blur(5px)' });
      $(this).css({ color: 'rgba(52, 152, 219, 1)' });
    } else {
      $('.baslik').css({ filter: 'blur(0px)' });
      $('.orta').css({ filter: 'blur(0px)' });
      $('.social-links').css({ filter: 'blur(0px)' });
      $(this).css({ color: '#ecf0f1' });
    }
  });

  // Allow keyboard activation (Enter/Space)
  $('.menuAc').on('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).click();
    }
  });
});
