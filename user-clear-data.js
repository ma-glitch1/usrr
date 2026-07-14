(function () {
  if (!new URLSearchParams(window.location.search).has("clearData")) return;

  window.localStorage.setItem("products", "[]");
  window.localStorage.setItem("categories", "[]");
  window.localStorage.removeItem("metaVersion");
  window.__userClearDataResult = {
    products: 0,
    categories: 0,
    done: true,
  };
})();
