const menuBtn = document.getElementById("menu__btn_Id");
const menuMobile = document.getElementById("menu__list_Id");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});
