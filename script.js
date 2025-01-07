document.getElementById("joinUsBtn").addEventListener("click", function () {
  window.location.href = "tel:+905424518148";
});

document.querySelectorAll(".btn.price__btn").forEach(function (button) {
  button.addEventListener("click", function () {
    window.location.href = "tel:+905424518148";
  });
});

document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("contactus").scrollIntoView({
    behavior: "smooth",
  });
});
document.getElementById("startBtn2").addEventListener("click", function () {
  document.getElementById("contactus").scrollIntoView({
    behavior: "smooth",
  });
});

const toogle_btn= document.querySelector('.toogle_btn')
const toogle_btnIcon= document.querySelector('.toogle_btn i')
const dropdown_Menu= document.querySelector('.dropdown_Menu')

toogle_btn.onclick= function(){

  dropdown_Menu.classList.toggle('open')
  const isOpen=dropdown_Menu.classList.contains('open')

  toogle_btnIcon.classList=isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}