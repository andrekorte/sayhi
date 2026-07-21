/* ===== Say Hi — menu page renderer + product pop-up ===== */
(function () {
  "use strict";
  var menu = window.SAYHI_MENU || [];
  var tabsEl = document.getElementById("mtabs");
  var listEl = document.getElementById("mlist");
  if (!tabsEl || !listEl) return;

  /* Where "Order" goes. Per-item deep links can be added to menu-data.js
     as `order: "https://..."`; otherwise we fall back to the main shop. */
  var ORDER = "https://sayhi-thainoodlebar.cloveronline.com.au/menu/all";

  var flat = [];               // every item, referenced from the DOM by data-idx

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function itemHTML(it) {
    var idx = flat.length; flat.push(it);
    var out = it.available === false;
    var img = it.img
      ? '<img class="mitem__img" src="' + it.img + '" alt="' + esc(it.name) + '" loading="lazy" />'
      : '';
    var star = it.hot ? ' <span class="mitem__star" title="House favourite">★</span>' : '';
    var tag = out ? ' <span class="mitem__tag">sold out</span>' : '';
    var desc = it.desc ? '<div class="mitem__desc">' + it.desc + '</div>' : '';
    return '<div class="mitem mitem--click' + (out ? ' mitem--out' : '') +
      '" role="button" tabindex="0" data-idx="' + idx + '" aria-label="View ' + esc(it.name) + '">' +
      img +
      '<div class="mitem__b">' +
        '<div class="mitem__top">' +
          '<span class="mitem__name">' + it.name + star + tag + '</span>' +
          '<span class="mitem__dots"></span>' +
          '<span class="mitem__price">$' + it.price + '</span>' +
        '</div>' + desc +
      '</div>' +
    '</div>';
  }

  menu.forEach(function (cat, i) {
    var tab = document.createElement("button");
    tab.className = "mtab" + (i === 0 ? " on" : "");
    tab.innerHTML = '<span>' + cat.emoji + '</span>' + cat.label;
    tab.addEventListener("click", function () {
      var t = document.getElementById("cat-" + cat.id);
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
    });
    tabsEl.appendChild(tab);

    var sec = document.createElement("section");
    sec.className = "mcat"; sec.id = "cat-" + cat.id;
    sec.innerHTML =
      '<div class="mcat__head"><span class="mcat__emoji">' + cat.emoji + '</span><h2>' + cat.label + '</h2></div>' +
      (cat.note ? '<p class="mcat__note">' + cat.note + '</p>' : '') +
      '<div class="mgrid">' + cat.items.map(itemHTML).join('') + '</div>';
    listEl.appendChild(sec);
  });

  /* ---------- Product pop-up ---------- */
  var modal = document.createElement("div");
  modal.className = "pmodal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML =
    '<div class="pmodal__overlay" data-close></div>' +
    '<div class="pmodal__dialog" role="dialog" aria-modal="true" aria-labelledby="pmodal-name">' +
      '<button class="pmodal__close" aria-label="Close" data-close>&times;</button>' +
      '<div class="pmodal__figure"><img class="pmodal__img" alt="" /></div>' +
      '<div class="pmodal__body">' +
        '<div class="pmodal__top"><h3 id="pmodal-name"></h3><span class="pmodal__price"></span></div>' +
        '<p class="pmodal__desc"></p>' +
        '<a class="btn btn--red btn--big pmodal__order" target="_blank" rel="noopener">Order Online →</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);

  var mFigure = modal.querySelector(".pmodal__figure");
  var mImg = modal.querySelector(".pmodal__img");
  var mName = modal.querySelector("#pmodal-name");
  var mPrice = modal.querySelector(".pmodal__price");
  var mDesc = modal.querySelector(".pmodal__desc");
  var mOrder = modal.querySelector(".pmodal__order");
  var lastFocus = null;

  function openModal(it) {
    if (it.img) { mImg.src = it.img; mImg.alt = it.name; mFigure.style.display = ""; }
    else { mImg.removeAttribute("src"); mFigure.style.display = "none"; }
    mName.textContent = it.name;
    mPrice.textContent = "$" + it.price;
    if (it.desc) { mDesc.textContent = it.desc; mDesc.style.display = ""; }
    else { mDesc.style.display = "none"; }
    if (it.available === false) {
      mOrder.classList.add("is-disabled");
      mOrder.removeAttribute("href");
      mOrder.textContent = "Currently sold out";
    } else {
      mOrder.classList.remove("is-disabled");
      mOrder.href = it.order || ORDER;
      mOrder.textContent = "Order Online →";
    }
    lastFocus = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".pmodal__close").focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  listEl.addEventListener("click", function (e) {
    var el = e.target.closest(".mitem--click");
    if (!el) return;
    openModal(flat[+el.getAttribute("data-idx")]);
  });
  listEl.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var el = e.target.closest(".mitem--click");
    if (!el) return;
    e.preventDefault();
    openModal(flat[+el.getAttribute("data-idx")]);
  });
  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  /* scroll-spy for tabs */
  var cats = menu.map(function (c) { return document.getElementById("cat-" + c.id); });
  var tabs = tabsEl.querySelectorAll(".mtab");
  var spy = function () {
    var idx = 0;
    cats.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= 200) idx = i; });
    tabs.forEach(function (t, i) { t.classList.toggle("on", i === idx); });
    var active = tabs[idx];
    if (active) active.scrollIntoView({ block: "nearest", inline: "center" });
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
})();
