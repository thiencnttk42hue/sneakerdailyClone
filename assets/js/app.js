const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Xử lý sự kiện kéo chuột đẩy header lên đầu
const header = $("#header");
const scrollToTop = $("#scroll-top");
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
    let html = $("html");
    html.scrollTop = 0;
  });
});

// Đóng mở User
const userOpen = $("#user-open");
const modal = $("#modal");
const formRegister = $("#form-register");
const formLogin = $("#form-login");
const authClose = $$(".close__icon.auth__close");
const btnToRegister = $("#btn-to-register");
const btnToLogin = $("#btn-to-login");
// mở modal
userOpen.addEventListener("click", function () {
  modal.classList.add("open");
  formLogin.style.display = "block";
  formRegister.style.display = "none";
});
// đóng modal
authClose.forEach((closeElm) => {
  closeElm.onclick = function () {
    $("#modal.open").classList.remove("open");
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
