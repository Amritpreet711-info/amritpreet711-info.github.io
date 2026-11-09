/*
  ONLINE BOOKING — Cashfree Payment Form link.

  url : paste your Cashfree Payment Form (or Payment Link) URL between the quotes,
        e.g. "https://payments.cashfree.com/forms/your-form-name".
        While it is empty, the booking section and buttons stay hidden.

  Never put Cashfree API keys / secret keys in this file — only the public form link.
*/
window.BOOKING = {
  url: ""
};

(function () {
  var url = (window.BOOKING && window.BOOKING.url || "").trim();
  if (!/^https:\/\//.test(url)) return;
  function apply() {
    var els = document.querySelectorAll("[data-booking]");
    for (var i = 0; i < els.length; i++) {
      if (els[i].tagName === "A") els[i].href = url;
      els[i].hidden = false;
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
