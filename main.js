
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    
    if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
