/* ===== Say Hi — menu page renderer ===== */
(function () {
  "use strict";
  var menu = window.SAYHI_MENU || [];
  var tabsEl = document.getElementById("mtabs");
  var listEl = document.getElementById("mlist");
  if (!tabsEl || !listEl) return;

  function itemHTML(it) {
    var img = it.img
      ? '<img class="mitem__img" src="' + it.img + '" alt="' + it.name + '" loading="lazy" />'
      : '';
    var star = it.hot ? ' <span class="mitem__star" title="House favourite">★</span>' : '';
    var tag = it.available === false ? ' <span class="mitem__tag">sold out</span>' : '';
    var desc = it.desc ? '<div class="mitem__desc">' + it.desc + '</div>' : '';
    return '<div class="mitem' + (it.available === false ? ' mitem--out' : '') + '">' +
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
