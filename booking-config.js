/*
  ONLINE BOOKING — Cashfree Payment Form link.

  url : paste your Cashfree Payment Form (or Payment Link) URL between the quotes,
        e.g. "https://payments.cashfree.com/forms/your-form-name".
        While it is empty, the booking section on the Contact page stays hidden and the
        'Book consultation' buttons open the enquiry form on the Contact page.

  Never put Cashfree API keys / secret keys in this file — only the public form link.
*/
window.BOOKING = {
  url: "https://payments.cashfree.com/forms/amritpreet-consultation"
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
    var links = document.querySelectorAll("[data-book-link]");
    for (var j = 0; j < links.length; j++) {
      links[j].href = url;
      links[j].target = "_blank";
      links[j].rel = "noopener";
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
