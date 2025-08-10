document.addEventListener('DOMContentLoaded', () => {
  // Fade-in khi load
  document.body.classList.add('fade-in');

  // Fade-out khi click link điều hướng
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      const isNewTab = link.target && link.target !== '_self';
      const isDownload = link.hasAttribute('download');
      const isMailto = link.href.startsWith('mailto:');
      const isSamePage = link.getAttribute('href')?.startsWith('#');

      // Bỏ qua các link đặc biệt hoặc link nội trang
      if (isNewTab || isDownload || isMailto || isSamePage) return;

      e.preventDefault();
      document.body.classList.remove('fade-in');

      setTimeout(() => {
        window.location.href = link.href;
      }, 300); // khớp với thời gian animation CSS
    });
  });
});
