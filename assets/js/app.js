const One = document.querySelector.bind(document);
const All = document.querySelectorAll.bind(document);
// Xử lý sự kiện kéo chuột đẩy header lên đầu
const header = One("#header");
const scrollToTop = One("#scroll-top");
window.addEventListener("scroll", function () {
  var scrollTop = this.scrollY;
  if (scrollTop > 40) {
    header.style.top = 0;
    scrollToTop.style.transform = "translateY(" + 0 + "px)";
  } else if (scrollTop < 40) {
    scrollToTop.style.transform = "translateY(" + 80 + "px)";
    header.style.top = 4 + "rem";
  }
  // Hiển thị scroll top
  scrollToTop.addEventListener("click", function () {
    let html = One("html");
    html.scrollTop = 0;
  });
});

// Đóng mở User
const userOpen = One("#user-open");
const modalAuth = One("#modal-auth");
const formRegister = One("#form-register");
const formLogin = One("#form-login");
const authClose = All(".close__icon.close__icon-modal");
const btnToRegister = One("#btn-to-register");
const btnToLogin = One("#btn-to-login");
// mở modal user trên pc
userOpen.addEventListener("click", function () {
  modalAuth.classList.add("open");
  formLogin.style.display = "block";
});
// mỏ user trên mobile
const userMobileOpen = One("#contact__item-user");
userMobileOpen.addEventListener("click", function () {
  modalAuth.classList.add("open");
  formLogin.style.display = "block";
});
// đóng modal
authClose.forEach((closeElm) => {
  closeElm.onclick = function () {
    One(".modal.open").classList.remove("open");
  };
});
// Chuyển từ login sang register
btnToRegister.onclick = function () {
  formLogin.style.display = "none";
  formRegister.style.display = "block";
};
// Chuyển từ register sang login
btnToLogin.onclick = function () {
  formLogin.style.display = "block";
  formRegister.style.display = "none";
};

const footerList = All(".footer__heading-mobile");
footerList.forEach(function (footerListElm) {
  footerListElm.addEventListener("click", function () {
    footerList.forEach((footer) => {
      footer.classList.remove("open");
    });
    this.classList.add("open");
  });
});

// Đóng mở search
const searchBtn = One("#right__item-search");
const modalSearch = One("#modal-search");
searchBtn.onclick = function () {
  modalSearch.classList.add("open");
};

// Đóng mở cart
// mở trên pc
const cartBtn = One("#right__item-cart");
const modalCart = One("#modal-cart");
cartBtn.onclick = function () {
  modalCart.classList.add("open");
};
// mở trên mobile
const cartMobileBtn = One("#contact__item-cart");
cartMobileBtn.onclick = function () {
  modalCart.classList.add("open");
};

