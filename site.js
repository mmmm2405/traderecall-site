// config.js の値を、ページ内の目印に差し込む
(function () {
  var s = window.SITE || {};
  document.querySelectorAll('[data-email]').forEach(function (el) {
    if (!s.email) return;
    el.textContent = s.email;
    if (el.tagName === 'A') el.href = 'mailto:' + s.email;
  });
  document.querySelectorAll('[data-operator]').forEach(function (el) {
    if (s.operator) el.textContent = s.operator;
  });
  document.querySelectorAll('[data-updated]').forEach(function (el) {
    if (s.updated) el.textContent = s.updated;
  });
})();
