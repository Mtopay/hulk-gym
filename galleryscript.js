document.getElementById("joinUsBtn").addEventListener("click", function () {
  window.location.href = "tel:+905424518148";
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

