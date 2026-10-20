/* Shared header, footer and page features. Edit firm details here once — every page updates. */
(function () {
  var FIRM = {
    name: "Amritpreet & Associates",
    phone1: "+91 87270 50066", tel1: "+918727050066",
    phone2: "+91 87270 90066", tel2: "+918727090066",
    whatsapp: "918727050066",
    email: "info.amritpreetandassociates@gmail.com"
  };
  window.FIRM = FIRM;

  var TABS = [
    ["index.html", "Home"],
    ["services.html", "Services"],
    ["about.html", "About"],
    ["updates.html", "Updates"],
    ["contact.html", "Contact"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap nav">' +
        '<a class="brand" href="index.html"><img class="logo" src="logo.png" alt="Amritpreet &amp; Associates logo" width="68" height="68">' +
        '<span class="txt"><b>Amritpreet &amp; Associates</b><span>Chartered Accountants</span></span></a>' +
        '<button class="menu-btn" aria-label="Open menu">Menu</button>' +
        '<ul class="tabs">' +
          TABS.map(function (t) {
            return '<li><a href="' + t[0] + '"' + (t[0] === here ? ' class="active" aria-current="page"' : "") + ">" + t[1] + "</a></li>";
          }).join("") +
        "</ul>" +
      "</div>";
    header.querySelector(".menu-btn").onclick = function () {
      header.querySelector(".tabs").classList.toggle("open");
    };
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="fgrid">' +
          "<div><img src=\"logo.png\" alt=\"\" width=\"120\" height=\"120\" style=\"margin-bottom:14px\"><h4>Amritpreet &amp; Associates</h4>" +
          "<p>Chartered Accountants</p>" +
          "<p class=\"faddr\"><b>Head Office</b><a href=\"https://maps.app.goo.gl/pUbe4gB2zqvdwZUa9\" target=\"_blank\" rel=\"noopener\">4th Floor, Kartar Bhawan, Firozpur Road,<br>Near PAU Gate No. 1, Ludhiana, Punjab 141004</a></p>" +
          "<p class=\"faddr\"><b>Branch Office</b><a href=\"https://maps.app.goo.gl/yPmrNe5ddGHJmnCw6\" target=\"_blank\" rel=\"noopener\">8687/2A, Street No. 19, Kot Mangal Singh,<br>Ludhiana, Punjab 141003</a></p></div>" +
          "<div><h4>Pages</h4><ul>" +
            TABS.map(function (t) { return '<li><a href="' + t[0] + '">' + t[1] + "</a></li>"; }).join("") +
          "</ul></div>" +
          "<div><h4>Contact</h4><ul>" +
            '<li><a href="tel:' + FIRM.tel1 + '">' + FIRM.phone1 + "</a></li>" +
            '<li><a href="tel:' + FIRM.tel2 + '">' + FIRM.phone2 + "</a></li>" +
            '<li><a href="mailto:' + FIRM.email + '">Email</a></li>' +
            '<li><a href="https://wa.me/' + FIRM.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="fbottom">' +
          "<p>© " + new Date().getFullYear() + " Amritpreet &amp; Associates, Chartered Accountants. All rights reserved.</p>" +
          "<p>This website is for information only and does not solicit work or advertise, in keeping with the guidelines of the Institute of Chartered Accountants of India. Content on this site, including updates, is general information and not professional advice; please contact the firm for advice on your specific situation.</p>" +
        "</div>" +
      "</div>";
  }

  /* ---------- Updates ---------- */
  function fmt(d) {
    var dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function card(u, short) {
    var pts = (!short && u.points && u.points.length)
      ? "<ul>" + u.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "";
    var src = (!short && u.source)
      ? '<a class="src" href="' + esc(u.source) + '" target="_blank" rel="noopener">Read source →</a>' : "";
    var more = short ? '<a class="src" href="updates.html">Read more →</a>' : "";
    return '<article class="update"><div class="meta"><span class="tag">' + esc(u.category) + "</span><time>" + fmt(u.date) + "</time></div>" +
      "<h3>" + esc(u.title) + "</h3><p>" + esc(u.summary) + "</p>" + pts + src + more + "</article>";
  }
  var list = (window.UPDATES || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });

  var home = document.getElementById("home-updates");
  if (home) home.innerHTML = list.slice(0, 3).map(function (u) { return card(u, true); }).join("");

  var feed = document.getElementById("updates-feed");
  var filters = document.getElementById("update-filters");
  if (feed) {
    var cats = ["All"].concat(list.map(function (u) { return u.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    var current = "All";
    function render() {
      var shown = list.filter(function (u) { return current === "All" || u.category === current; });
      feed.innerHTML = shown.length ? shown.map(function (u) { return card(u, false); }).join("") : "<p>No updates in this category yet.</p>";
      filters.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b.textContent === current); });
    }
    filters.innerHTML = cats.map(function (c) { return "<button type=\"button\">" + esc(c) + "</button>"; }).join("");
    filters.querySelectorAll("button").forEach(function (b) { b.onclick = function () { current = b.textContent; render(); }; });
    render();
  }

  /* ---------- Enquiry form → WhatsApp / email ---------- */
  var form = document.getElementById("enquiry");
  if (form) {
    function msg() {
      var f = form.elements;
      return "Enquiry from website\n\nName: " + f.name.value + "\nPhone: " + f.phone.value +
        (f.email.value ? "\nEmail: " + f.email.value : "") + "\nService: " + f.service.value + "\n\n" + f.message.value;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      window.open("https://wa.me/" + FIRM.whatsapp + "?text=" + encodeURIComponent(msg()), "_blank", "noopener");
    });
    document.getElementById("send-email").onclick = function () {
      if (!form.reportValidity()) return;
      location.href = "mailto:" + FIRM.email + "?subject=" + encodeURIComponent("Website enquiry – " + form.elements.service.value) + "&body=" + encodeURIComponent(msg());
    };
  }
})();

/* ================= v2 features ================= */
(function () {
  /* floating WhatsApp button */
  var wa = document.createElement("a");
  wa.className = "wa-float"; wa.href = "https://wa.me/" + window.FIRM.whatsapp; wa.target = "_blank"; wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.innerHTML = '<svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.3.6 4.5 1.8 6.4L3 29l7.2-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.2c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.3 1.1 1.1-4.1-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.2 9.8 10 5.1 16 5.1s10.8 4.7 10.8 10.5S22 26.2 16 26.2zm5.9-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 2.1.9 3 .9 4 .8.7-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5c-.1-.2-.3-.3-.6-.4z"/></svg>';
  document.body.appendChild(wa);

  /* rotating word in hero */
  var rot = document.getElementById("rotator");
  if (rot) {
    var words = ["Income Tax", "GST", "TDS / TCS", "Company Law", "Subsidies", "NRI taxation", "NGO compliance", "Audits"], i = 0;
    setInterval(function () {
      rot.classList.add("out");
      setTimeout(function () { i = (i + 1) % words.length; rot.textContent = words[i]; rot.classList.remove("out"); }, 350);
    }, 2400);
  }

  /* live upcoming due dates */
  var dl = document.getElementById("due-list");
  if (dl) {
    var RULES = [
      { day: 7, label: "TDS / TCS deposit for previous month", aprilDay: 30 },
      { day: 11, label: "GSTR-1 (monthly filers)" },
      { day: 15, label: "PF & ESI contributions" },
      { day: 20, label: "GSTR-3B (monthly filers)" }
    ];
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var out = [];
    for (var m = 0; m < 3; m++) {
      RULES.forEach(function (r) {
        var y = today.getFullYear(), mo = today.getMonth() + m;
        var probe = new Date(y, mo, 1);
        var d = (r.aprilDay && probe.getMonth() === 3) ? r.aprilDay : r.day;
        var dt = new Date(probe.getFullYear(), probe.getMonth(), d);
        if (dt >= today) out.push({ dt: dt, label: r.label });
      });
    }
    out.sort(function (a, b) { return a.dt - b.dt; });
    dl.innerHTML = out.slice(0, 4).map(function (x) {
      var days = Math.round((x.dt - today) / 864e5);
      var c = days === 0 ? "Today" : days === 1 ? "Tomorrow" : "in " + days + " days";
      return '<li><div class="d"><b>' + x.dt.getDate() + "</b><span>" + x.dt.toLocaleDateString("en-IN", { month: "short" }) +
        '</span></div><div class="t">' + x.label + '</div><div class="c' + (days <= 3 ? " soon" : "") + '">' + c + "</div></li>";
    }).join("");
  }

  /* reveal on scroll */
  var els = document.querySelectorAll(".reveal, .services .svc, .step, .update, .office, .value, .svc-detail, .faq details");
  els.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el, k) { el.style.transitionDelay = (k % 4) * 70 + "ms"; io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
