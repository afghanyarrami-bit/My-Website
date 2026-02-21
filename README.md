# 🌐 My Personal Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

**A simple personal website built with pure HTML, CSS, and JavaScript**

</div>

---

## 👤 About

A clean personal website for **Ramin Afghanyar**, built with pure HTML, CSS, and JavaScript — no frameworks or libraries used. The website has 4 sections: Home, About Me, Skills, and Contact. It is a single-page website with smooth navigation between sections.

> This is one of my first web development projects, built to practice HTML structure, CSS styling, and basic JavaScript DOM manipulation.

---

## ✨ Features

- 🏠 **Home Section** — "Hello, I'm Ramin Afghanyar" with a Click Me button that shows a message
- 👤 **About Me Section** — Short introduction with a "Read More" toggle button
- 🛠 **Skills Section** — List of all technical skills
- 📬 **Contact Section** — Contact info + a Send a Message form
- 🧭 **Navigation Bar** — Links to Home, About Me, Skills, Contact
- ✅ **Form Handling** — Shows success message after form submit (no real backend)
- 📱 **Responsive** — Works on different screen sizes

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure & all sections |
| CSS3 | Styling & layout |
| JavaScript | Toggle buttons, form handling, DOM events |

> ⚠️ No React, no API, no backend — pure Vanilla JavaScript only.

---

## 🧠 Skills Listed on Website

- HTML
- CSS
- JavaScript
- Python
- Basic Django
- Basic C
- Basic C++
- Basic Java

---

## 📁 Project Structure

```
person-website/
│
├── Person_Website.html     # Main HTML — all 4 sections
├── style.css               # All styles
└── script.js               # Toggle & form logic
```

---

## ⚙️ How JavaScript Works

```javascript
// Show/hide message on Home section
function showMessage() {
  document.getElementById("message").classList.toggle("hidden");
}

// Toggle extra About Me text
function toggleMore() {
  document.getElementById("moreText").classList.toggle("hidden");
}

// Show contact form on button click
btn.addEventListener("click", function() {
  form.style.display = "flex";
});

// Handle form submit — show success, reset form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // no real submission
  document.getElementById("formMessage").classList.remove("hidden");
  form.reset();
});
```

---

## ⚙️ Installation

No installation needed! Pure HTML project.

**1. Clone the repository**

```bash
git clone https://github.com/afghanyarrami-bit/person-website.git
```

**2. Open the project**

```bash
cd person-website
```

**3. Open in browser**

Double-click `Person_Website.html` — or open with **Live Server** in VS Code.

---
## Screanshoot 

---
## 📬 Contact Info (on Website)

| Field | Info |
|---|---|
| 👤 Name | Ramin Afghanyar |
| ✉️ Email | afghanyar@gmail.com |
| 📞 Phone | +41 78 257 01 96 |
| 📍 Location | Altdorf, Kanton Uri 6460, Switzerland |

---


## 📄 License

MIT License © 2026 Ramin Afghanyar — 2026 Afghanyar | My Personal Website
