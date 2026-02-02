// Show a simple message in Home section
function showMessage() {
    var msg = document.getElementById("message");
    msg.classList.toggle("hidden");
}

// Toggle extra About Me text
function toggleMore() {
    var more = document.getElementById("moreText");
    more.classList.toggle("hidden");
}

// Handle contact form submission
var btn = document.getElementById("buttonclick");
var form = document.getElementById("contactForm");
btn.addEventListener("click", function() {
    form.style.display="flex";
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent real submission
    var msg = document.getElementById("formMessage");
    msg.classList.remove("hidden");
    form.reset();
});




