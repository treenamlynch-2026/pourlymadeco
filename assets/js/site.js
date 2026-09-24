(function () {
  "use strict";
  var S = window.SITE;
  var ROOT = document.documentElement.getAttribute("data-root") || "";
  var PAGE = document.body.getAttribute("data-page") || "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ICONS = {
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-4.2 22.2c-.1-.9-.2-2.3 0-3.3l1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5a5.3 5.3 0 0 0-5.5 5.3c0 1 .4 2.2.9 2.8.1.1.1.2.1.4l-.3 1.4c-.1.2-.2.3-.4.2-1.6-.7-2.5-3-2.5-4.9 0-4 2.9-7.6 8.3-7.6 4.4 0 7.8 3.1 7.8 7.3 0 4.4-2.7 7.9-6.6 7.9-1.3 0-2.5-.7-2.9-1.5l-.8 3c-.3 1.1-1.1 2.5-1.6 3.4A11.5 11.5 0 1 0 12 .5z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.7-8.8L1.7 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z"/></svg>'
  };
  var LABELS = { tiktok: "TikTok", youtube: "YouTube", pinterest: "Pinterest", x: "X" };

  function socialLinks(cls, withText) {
    return ["tiktok", "youtube", "pinterest", "x"].filter(function (k) { return S.social[k]; }).map(function (k) {
      return '<a class="' + cls + '" href="' + esc(S.social[k]) + '" target="_blank" rel="noopener" aria-label="' + LABELS[k] + '">' +
        ICONS[k] + (withText ? "<span>" + LABELS[k] + "</span>" : "") + "</a>";
    }).join("");
  }

  var NAV = [
    ["home", "", "Home"], ["soap", "soap/", "Soap"], ["candles", "candles/", "Candles"],
    ["about", "about/", "About"], ["contact", "contact/", "Contact"]
  ];

  function navLinks() {
    return NAV.map(function (n) {
      return '<a href="' + ROOT + n[1] + '"' + (PAGE === n[0] ? ' class="active" aria-current="page"' : "") + ">" + n[2] + "</a>";
    }).join("");
  }

  var LOGO = '<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13 12c4 0 9 1 9 6s-5 5-5 9m6-12c3 1 5 3 5 6 0 4-3 6-6 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M20 30c0 2-1 4-1 4s-1-2-1-4a1 1 0 0 1 2 0z" fill="var(--accent)"/></svg>';

  // ---------- header / footer ----------
  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="' + ROOT + '">' + LOGO + '<span>Pourly <em>&middot;</em> Made Co.</span></a>' +
        '<nav class="nav" id="nav" aria-label="Main">' + navLinks() + "</nav>" +
        '<div class="header-social">' + socialLinks("icon-link", false) + "</div>" +
        '<button class="menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      "</div>";
    var btn = document.getElementById("menu-btn");
    btn.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="container footer-inner">' +
        '<div><a class="brand" href="' + ROOT + '">' + LOGO + '<span>Pourly <em>&middot;</em> Made Co.</span></a>' +
        '<p class="muted">' + esc(S.tagline) + "<br>" + esc(S.location) + "</p></div>" +
        '<nav class="footer-nav" aria-label="Footer">' + navLinks() + "</nav>" +
        '<div class="footer-social">' + socialLinks("icon-link labeled", true) + "</div>" +
      "</div>" +
      '<div class="container copyright">&copy; ' + new Date().getFullYear() + " Pourly Made Co.</div>";
  }

  // social link fill-ins anywhere on the page: <a data-social="youtube">
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = S.social[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else { a.remove(); }
  });
  document.querySelectorAll("[data-requires-social]").forEach(function (el) {
    if (!S.social[el.getAttribute("data-requires-social")]) el.remove();
  });

  // ---------- products ----------
  function card(p) {
    var img = p.image
      ? '<img src="' + ROOT + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">'
      : '<div class="ph ph-' + esc(p.type) + '"><span>Photo coming soon</span></div>';
    var badges = (p.sample ? '<span class="badge badge-sample">Sample</span>' : "") +
      (p.forHim ? '<span class="badge badge-him">For him</span>' : "");
    return '<article class="card">' +
      '<div class="card-media">' + img + '<div class="badges">' + badges + "</div></div>" +
      '<div class="card-body">' +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="meta"><span>' + esc(p.scent) + "</span><span>" + esc(p.base) + "</span></p>" +
        "<p>" + esc(p.description) + "</p>" +
        '<a class="ask" href="' + ROOT + "contact/?product=" + encodeURIComponent(p.name) + '">Ask about this &rarr;</a>' +
      "</div></article>";
  }

  document.querySelectorAll("[data-products]").forEach(function (grid) {
    var mode = grid.getAttribute("data-products"); // soap | candle | featured
    var all = (window.PRODUCTS || []).filter(function (p) {
      return mode === "featured" ? p.featured : p.type === mode;
    });
    var filterBar = grid.previousElementSibling && grid.previousElementSibling.classList.contains("filters")
      ? grid.previousElementSibling : null;

    function render(filter) {
      var list = filter === "him" ? all.filter(function (p) { return p.forHim; }) : all;
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="empty">New products are on the way.</p>';
    }
    var initial = new URLSearchParams(location.search).get("for") === "him" && filterBar ? "him" : "all";
    render(initial);
    if (filterBar && initial === "him") {
      filterBar.querySelectorAll("button").forEach(function (x) {
        var on = x.getAttribute("data-filter") === "him";
        x.classList.toggle("active", on);
        x.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    if (filterBar) {
      filterBar.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-filter]");
        if (!b) return;
        filterBar.querySelectorAll("button").forEach(function (x) {
          x.classList.toggle("active", x === b);
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        render(b.getAttribute("data-filter"));
      });
    }
  });

  // ---------- contact form ----------
  var form = document.getElementById("contact-form");
  if (form) {
    var product = new URLSearchParams(location.search).get("product");
    if (product) {
      form.message.value = "Hi! I have a question about " + product + ": ";
    }
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.botcheck && form.botcheck.checked) return;
      if (!S.web3formsKey || S.web3formsKey.indexOf("YOUR_") === 0) {
        status.className = "form-status error";
        status.textContent = "Form not connected yet (site owner: add the Web3Forms key in assets/js/config.js).";
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Sending...";
      status.className = "form-status"; status.textContent = "";
      var data = {
        access_key: S.web3formsKey,
        subject: "New message from pourlymadeco.com" + (product ? " (" + product + ")" : ""),
        from_name: "Pourly Made Co. website",
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (res.success) {
          form.reset();
          status.className = "form-status ok";
          status.textContent = "Thanks! Your message was sent. Expect a reply soon.";
        } else { throw new Error(res.message || "Send failed"); }
      }).catch(function () {
        status.className = "form-status error";
        status.textContent = "Something went wrong. Please try again in a minute.";
      }).finally(function () {
        btn.disabled = false; btn.textContent = "Send message";
      });
    });
  }
})();
