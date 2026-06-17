(function () {
  var enquirySelect = document.getElementById('enquiry-type');
  var messageField  = document.getElementById('message');
  if (!enquirySelect || !messageField) return;
  enquirySelect.addEventListener('change', function () {
    messageField.placeholder = this.value === 'Shelf Space Rental'
      ? 'Tell us about your business. Include any social media and website links'
      : 'How can we help?';
  });
})();

function dismissBanner() {
  var banner = document.getElementById('announcement-banner');
  if (banner) banner.style.display = 'none';
}

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
