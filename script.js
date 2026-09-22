document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // CHECKOUT
  // =====================================================

  const CHECKOUT_URL = "https://pay.hotmart.com/H107721724X";

  const checkoutButtons =
    document.querySelectorAll(".btn-checkout");

  checkoutButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      event.preventDefault();

      if (
        !CHECKOUT_URL ||
        CHECKOUT_URL === "#"
      ) {
        alert(
          "Checkout ainda não configurado."
        );

        return;
      }

      window.location.href =
        CHECKOUT_URL;

    });

  });


  // =====================================================
  // FAQ
  // =====================================================

  const faqItems =
    document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    const question =
      item.querySelector(".faq-question");

    const answer =
      item.querySelector(".faq-answer");

    question.addEventListener(
      "click",
      () => {

        const isActive =
          item.classList.contains("active");


        // FECHA TODAS
        faqItems.forEach((otherItem) => {

          otherItem.classList.remove("active");

          const otherAnswer =
            otherItem.querySelector(".faq-answer");

          otherAnswer.style.maxHeight =
            null;

        });


        // ABRE APENAS A CLICADA
        if (!isActive) {

          item.classList.add("active");

          answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

      }
    );

  });


  // =====================================================
  // SCROLL SUAVE INTERNO
  // =====================================================

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]:not(.btn-checkout)'
    );

  internalLinks.forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const href =
          link.getAttribute("href");

        if (
          !href ||
          href === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

});