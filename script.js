
function toggleMenu() {
  document.querySelector(".left-section .menu").classList.toggle("show");
  document.querySelector(".right-section").classList.toggle("show");
}

// Close menu when clicking outside the header
document.addEventListener("click", function (e) {
  const header = document.querySelector(".starbucks-header");
  const menu = document.querySelector(".left-section .menu");
  const rightSection = document.querySelector(".right-section");

  if (header && menu && rightSection && !header.contains(e.target)) {
    menu.classList.remove("show");
    rightSection.classList.remove("show");
  }
});

// Order button
const orderButton = document.querySelector(".starbucks-order button");

if (orderButton) {
  orderButton.addEventListener("click", () => {
    alert("Welcome to Starbucks! ");
  });
}

// Mobile footer accordion
function toggleFooter(heading) {
  if (window.innerWidth > 768) return;
  heading.parentElement.classList.toggle("active");
}

// Sign-in form
const signInForm = document.querySelector(".sign-in-form");

if (signInForm) {
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("This is a demo website. Sign-in is not available yet.");
  });
}

// Join form
const joinForm = document.querySelector(".join_form");

if (joinForm) {
  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("This is a demo website. Account creation is not available yet.");
  });
}

