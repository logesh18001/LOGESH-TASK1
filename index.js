const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Optional: Close sidebar on menu item click
document.querySelectorAll('.sidebar ul li a').forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
