// Adiciona a função de abertura e fechamento do drawer

const openDrawerBtn = document.querySelector(".menu");
const closeDrawerBtn = document.querySelector(".close-menu");
const drawer = document.getElementById("drawer");

openDrawerBtn.addEventListener("click", function() {
  drawer.style.display = "block";
});

closeDrawerBtn.addEventListener("click", function() {
  drawer.style.display = "none";
});

let allItemsDrawer = document.querySelectorAll('.items-drawer');
for (const item of allItemsDrawer) {
  item.addEventListener("click", function() {
    drawer.style.display = "none";
  });
}