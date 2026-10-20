(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  document.querySelectorAll("[data-end]").forEach(function (row) {
    var end = new Date(row.getAttribute("data-end") + "T00:00:00");
    if (end < today) row.classList.add("is-past");
  });

  var hidePast = document.querySelector("[data-hide-past]");
  if (hidePast) {
    hidePast.addEventListener("click", function () {
      var pressed = hidePast.getAttribute("aria-pressed") === "true";
      hidePast.setAttribute("aria-pressed", pressed ? "false" : "true");
      hidePast.textContent = pressed ? "Hide past dates" : "Show past dates";
      document.body.classList.toggle("hide-past", !pressed);
    });
  }

  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      document.querySelectorAll("[data-calendar]").forEach(function (section) {
        var show = target === "all" || section.getAttribute("data-calendar") === target;
        section.hidden = !show;
      });
    });
  });
})();
