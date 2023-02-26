const form = document.querySelector("#login-form");
const message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === "admin" && password === "admin") {
    message.textContent = "Login successful!";

    setTimeout(function() {
      window.location.href = "./landing-Page.html";
    }, 1000);
  } else {
    message.textContent = "Login failed. Please try again.";
  }
});
