(function () {
  const modal = document.getElementById("login-modal");
  const form = document.getElementById("login-form");

  if (!modal || !form) return;

  modal.classList.add("login-modal");

  const card = modal.querySelector(":scope > div");
  if (card) {
    card.className = "login-card";
    card.removeAttribute("style");

    if (!card.querySelector(".login-mark")) {
      const mark = document.createElement("div");
      mark.className = "login-mark";
      mark.innerHTML = '<i class="fa-solid fa-book-open-reader"></i>';
      card.prepend(mark);
    }
  }

  const title = modal.querySelector("h1");
  if (title) {
    title.removeAttribute("style");
    title.textContent = "مكتبة ابو علا";
  }

  const intro = modal.querySelector("p");
  if (intro) {
    intro.removeAttribute("style");
    intro.textContent = "أهلاً وسهلاً بك، سجل بياناتك حتى نوصل طلبك بسرعة ونخلي تجربتك أسهل.";
  }

  form.className = "login-form";
  form.removeAttribute("style");

  [
    ["login-name", "fa-user", "الاسم الكريم", "name"],
    ["login-address", "fa-location-dot", "العنوان الكامل", "street-address"],
    ["login-phone", "fa-mobile-screen-button", "رقم الهاتف", "tel"],
  ].forEach(([id, icon, placeholder, autocomplete]) => {
    const input = document.getElementById(id);
    if (!input || input.closest(".login-field")) return;

    input.className = "login-control";
    input.removeAttribute("style");
    input.placeholder = placeholder;
    input.autocomplete = autocomplete;

    const field = document.createElement("label");
    field.className = "login-field";
    field.htmlFor = id;

    const iconNode = document.createElement("i");
    iconNode.className = `fa-solid ${icon}`;
    iconNode.setAttribute("aria-hidden", "true");

    input.parentNode.insertBefore(field, input);
    field.append(iconNode, input);
  });

  const button = form.querySelector('button[type="submit"]');
  if (button) {
    button.className = "login-submit";
    button.removeAttribute("style");
    button.innerHTML = '<span>دخول إلى المكتبة</span><i class="fa-solid fa-arrow-left"></i>';
  }
})();
