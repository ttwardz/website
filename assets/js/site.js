function updateSiteForAfterHours() {
  const now = new Date();
  const hour = now.getHours();
  //TODO: reactivate time check after testing
  const isAfterDark = true//hour >= 21 || hour < 5;

  // Update site title
  const titleElement = document.getElementById('site-title');
  if (titleElement) {
    if (isAfterDark) {
      titleElement.innerHTML = "Hello, You've Reached Tommy Twardzik<br><em>After Hours</em>";
    } else {
      titleElement.textContent = "Hello, You've Reached Tommy Twardzik";
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

updateSiteForAfterHours();