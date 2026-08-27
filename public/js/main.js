(function () {
  "use strict";

  function setupAccordion(trigger, panel, options) {
    options = options || {};
    trigger.addEventListener("click", function () {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      const next = !isOpen;
      trigger.setAttribute("aria-expanded", String(next));
      panel.hidden = !next;
      const sign = trigger.querySelector(options.signSelector);
      if (sign) sign.textContent = next ? "−" : "+";
      if (options.label) {
        const label = trigger.querySelector(options.labelSelector);
        if (label) label.textContent = next ? options.label.open : options.label.closed;
      }
      if (typeof options.onToggle === "function") options.onToggle(next);
    });
  }

  // "Voir les 7 autres soins" accordion
  const soinsTrigger = document.getElementById("soins-accordion-trigger");
  const soinsPanel = document.getElementById("soins-accordion-panel");
  if (soinsTrigger && soinsPanel) {
    setupAccordion(soinsTrigger, soinsPanel, {
      signSelector: ".accordion-sign",
      labelSelector: ".accordion-label",
      label: { open: "Tous nos autres soins", closed: "Voir les 7 autres soins" }
    });
  }

  // FAQ accordion — exclusive: opening one closes the others
  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach(function (item) {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-answer");
    if (!trigger || !panel) return;
    setupAccordion(trigger, panel, {
      signSelector: ".faq-sign",
      onToggle: function (isOpen) {
        if (!isOpen) return;
        faqItems.forEach(function (other) {
          if (other === item) return;
          const otherTrigger = other.querySelector(".faq-trigger");
          const otherPanel = other.querySelector(".faq-answer");
          if (!otherTrigger || !otherPanel) return;
          otherTrigger.setAttribute("aria-expanded", "false");
          otherPanel.hidden = true;
          const otherSign = otherTrigger.querySelector(".faq-sign");
          if (otherSign) otherSign.textContent = "+";
        });
      }
    });
  });

  // Scroll reveal
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    revealEls.forEach(function (el) {
      const delay = parseInt(el.dataset.reveal, 10) || 0;
      el.style.transitionDelay = delay + "ms";
    });
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
