/* ===== Say Hi — shared header, footer & interactions ===== */
(function () {
  "use strict";
  var ORDER = "https://sayhi-thainoodlebar.cloveronline.com.au/menu/all";
  var IG = "https://www.instagram.com/sayhi_buree/";
  var FB = "https://www.facebook.com/Sayhiburi/";
  var LINKS = "https://linktr.ee/sayhi.community";
  var page = document.body.getAttribute("data-page") || "";

  var links = [
    { id: "home",   label: "Home",    href: "index.html" },
    { id: "menu",   label: "Menu",    href: "menu.html" },
    { id: "story",  label: "Story",   href: "story.html" },
    { id: "market", label: "Market",  href: "market.html" },
    { id: "visit",  label: "Find Us", href: "visit.html" }
  ];

  function navLinks(cls) {
    return links.map(function (l) {
      var cur = l.id === page ? ' aria-current="page"' : "";
      return '<a href="' + l.href + '"' + cur + ' class="' + (cls || "") + '">' + l.label + "</a>";
    }).join("");
  }

  /* ---- Header ---- */
  var hdr = document.getElementById("site-header");
  if (hdr) {
    hdr.className = "hdr";
    hdr.innerHTML =
      '<a class="hdr__brand" href="index.html">' +
        '<img class="hdr__logo" src="assets/images/logo.png" alt="Say Hi logo" />' +
        '<span><span class="hdr__word">Say <b>Hi</b></span><span class="hdr__thai">สหาย</span></span>' +
      "</a>" +
      '<nav class="hdr__nav" aria-label="Primary">' + navLinks() + "</nav>" +
      '<a class="btn btn--red hdr__order" href="' + ORDER + '" target="_blank" rel="noopener">Order Online</a>' +
      '<button class="hdr__burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>';

    /* Thai-flag bunting under the header */
    hdr.insertAdjacentElement("afterend", Object.assign(document.createElement("div"), { className: "bunting" }));

    var drawer = document.createElement("div");
    drawer.className = "drawer";
    drawer.id = "drawer";
    drawer.innerHTML = navLinks() +
      '<a class="btn btn--gold" href="' + ORDER + '" target="_blank" rel="noopener">Order Online →</a>';
    document.body.appendChild(drawer);

    var burger = document.getElementById("burger");
    burger.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      burger.classList.toggle("x", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { drawer.classList.remove("open"); burger.classList.remove("x"); });
    });
  }

  /* ---- Footer ---- */
  var ftr = document.getElementById("site-footer");
  if (ftr) {
    ftr.className = "ftr";
    ftr.innerHTML =
      '<div class="wrap"><div class="ftr__top">' +
        '<div class="ftr__brand"><img src="assets/images/logo.png" alt="Say Hi" />' +
          '<p>สหาย — "friend." Thai street-food & boat noodles, hidden down a laneway in Brisbane CBD.</p></div>' +
        '<div><h4>Visit</h4><a href="visit.html">123 Charlotte St</a><a href="visit.html">Brisbane City QLD</a><a href="visit.html">Mon–Sat 11am–8pm · Sun 10am–6pm</a></div>' +
        '<div><h4>Explore</h4><a href="menu.html">Menu</a><a href="story.html">Our story</a><a href="market.html">Say Hi Market</a></div>' +
        '<div><h4>Order &amp; Follow</h4><a href="' + ORDER + '" target="_blank" rel="noopener">Order online →</a><a href="' + IG + '" target="_blank" rel="noopener">Instagram →</a><a href="' + FB + '" target="_blank" rel="noopener">Facebook →</a><a href="' + LINKS + '" target="_blank" rel="noopener">All our links →</a></div>' +
      "</div>" +
      '<p class="ftr__fine">© ' + new Date().getFullYear() + ' Say Hi Thai Noodle Bar · Made with 🌶️ &amp; ❤️ in Brisbane</p></div>';
    /* Thai-flag bunting above the footer */
    ftr.insertAdjacentElement("beforebegin", Object.assign(document.createElement("div"), { className: "bunting" }));
  }

  /* ---- Floating order button ---- */
  if (!document.querySelector(".fab")) {
    var fab = document.createElement("a");
    fab.className = "fab";
    fab.href = ORDER; fab.target = "_blank"; fab.rel = "noopener";
    fab.textContent = "🛒 Order";
    document.body.appendChild(fab);
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- SEO: resolve absolute URLs to the real host at runtime ---- */
  try {
    var base = location.origin;
    var here = base + location.pathname.replace(/index\.html$/, "");
    var cover = base + "/assets/images/og-cover.jpg";
    function setMeta(sel, attr, val) {
      var el = document.querySelector(sel); if (el) el.setAttribute(attr, val);
    }
    setMeta('link[rel="canonical"]', "href", here);
    setMeta('meta[property="og:url"]', "content", here);
    setMeta('meta[property="og:image"]', "content", cover);
    setMeta('meta[name="twitter:image"]', "content", cover);

    /* ---- SEO: Restaurant structured data (JSON-LD) ---- */
    var ld = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": base + "/#restaurant",
      "name": "Say Hi Thai Noodle Bar",
      "alternateName": "สหาย",
      "description": "Thai street-food & boat noodles hidden down a laneway behind Genki Mart in Brisbane CBD.",
      "url": base + "/",
      "image": cover,
      "logo": base + "/assets/images/logo.png",
      "servesCuisine": ["Thai", "Noodles", "Street Food"],
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Charlotte Street, Ground Floor",
        "addressLocality": "Brisbane City",
        "addressRegion": "QLD",
        "postalCode": "4000",
        "addressCountry": "AU"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": -27.4705, "longitude": 153.0260 },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00", "closes": "20:00"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00", "closes": "18:00"
      }],
      "menu": ORDER,
      "hasMenu": ORDER,
      "acceptsReservations": "False",
      "telephone": "+61 406 287 869",
      "sameAs": [IG, FB, LINKS]
    };
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  } catch (e) { /* non-fatal */ }
})();
