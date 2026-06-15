# ☕ Coffee World - Responsive Web Page with Video Modal

A clean, modern, and responsive landing page dedicated to coffee lovers. This project features a sleek hero section, custom styling, and an interactive video modal that provides a seamless user experience.

## 🚀 Live Demo

_(Once you enable GitHub Pages, you can paste your live link here)_
👉 [Live Demo Link](https://your-username.github.io/your-repository-name)

---

## 🛠️ Features

- **Fully Responsive:** Adapts beautifully from desktop screens down to mobile devices (max-width: 415px).
- **Interactive Video Modal:** Users can watch a coffee-making video seamlessly without leaving the page.
- **Modern UI/UX:** Clean typography, minimalist design, and user-friendly interactions.

---

## 💻 Tech Stack

- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, Media Queries, Custom variables)
- **Vanilla JavaScript** (DOM Manipulation & Event handling)

---

## 🧠 What I Learned & Troubleshooting

This project was a fantastic learning experience, especially for stepping up my **JavaScript** and **CSS architecture** skills. Here is what I discovered and fixed during development:

### 1. Mastering the JavaScript `<video>` Element 🎬

Initially, when the modal was closed, the video would keep playing in the background (and the audio would still run).

- **The Lesson:** I learned how to properly interface with HTML5 video elements using JavaScript.
- **The Solution:** I utilized the `.pause()` method and learned how to reset the video timeline using the `.currentTime = 0` property, ensuring a smooth user experience when opening and closing the modal.

### 2. Solving CSS Specificity & Class Conflicts 🔍

I faced an issue where two different display classes (`.hide-modal` and `.show-video`) were conflicting with each other because they shared the same CSS specificity weight.

- **The Lesson:** Relying on multiple conflicting utility classes can cause unexpected bugs depending on their order in the stylesheet.
- **The Solution:** I refactored the code to use a single dynamic `.active` class toggle, making the CSS predictable and much cleaner.

### 3. File & Folder Naming Best Practices 📂

I realized that using special characters (like `&`) in folder names (e.g., `photos&videos`) can cause broken links and URL routing issues when deploying to live servers like GitHub Pages. I fixed this by renaming the directory to a standard, web-friendly name like `media` / `assets`.

---

## 🔧 How to Run the Project Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
   ```
2. Open index.html in your favorite browser.

3. Enjoy the coffee experience! ☕
