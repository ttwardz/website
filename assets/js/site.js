// Initialize site
function initSite() {
  updateSiteForAfterHours();
  setActiveNavLink();
}

function updateSiteForAfterHours() {
  const now = new Date();
  const hour = now.getHours();
  const isAfterDark = hour >= 21 || hour < 5;

  // Update site title
  const titleElement = document.getElementById('site-title');
  if (titleElement) {
    if (isAfterDark) {
      titleElement.innerHTML = "Hello, You've Reached the Website of Tommy Twardzik <em>After Hours</em>";
    } else {
      titleElement.innerHTML = "Writing and Development<wbr> by Tommy Twardzik";
    }
  }

  // Update contact links
  const contactLinks = document.querySelectorAll('a[href="mailto:ttwardzik@gmail.com"]');
  contactLinks.forEach(link => {
    if (isAfterDark) {
      link.textContent = "Drop Me a Line ☏";
    } else {
      link.textContent = "Contact";
    }
  });
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    // Skip external links and mailto links
    if (link.href.startsWith('http') && !link.href.includes(window.location.hostname) ||
        link.href.startsWith('mailto:')) {
      return;
    }

    const linkPath = new URL(link.href).pathname;

    // Check if this link matches the current page
    if (linkPath === currentPath ||
        (currentPath === '/' && linkPath === '/') ||
        (currentPath.startsWith('/work') && linkPath === '/work/') ||
        (currentPath.startsWith('/about') && linkPath === '/about/')) {
      link.classList.add('active');
    }
  });
}

// Initialize when page loads
initSite();