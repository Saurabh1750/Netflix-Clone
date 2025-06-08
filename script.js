// Debounce scroll event
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Scroll effect on navbar
window.addEventListener('scroll', debounce(() => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}));

// Navigate to profile.html on profile icon click
const profileIcon = document.querySelector(".profile-icon");
if (profileIcon) {
  profileIcon.setAttribute('tabindex', '0');

  const navigateToProfile = () => {
    profileIcon.classList.add('clicked');
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 200);
  };

  profileIcon.addEventListener("click", navigateToProfile);
  profileIcon.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToProfile();
    }
  });
}
