function toggleSidebar(button) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('open');
  button.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.split('/').pop();
  const currentPage = path === '' ? 'index.html' : path;
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });
});
