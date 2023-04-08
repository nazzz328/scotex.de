///////   Read more (Lese weiter) functionality on reviews

const textEls = document.querySelectorAll(".reviews__text");
textEls.forEach((textEl) => {
  const readMoreLink = document.createElement("a");
  readMoreLink.href = "#";
  readMoreLink.textContent = "Lese weiter";
  readMoreLink.style.cssText = `
color: #719d0b;
text-decoration-thickness: 1px;
`;
  const readLessLink = document.createElement("a");
  readLessLink.href = "#";
  readLessLink.textContent = "Weniger lesen";
  readLessLink.style.cssText = `
color: #719d0b;
text-decoration-thickness: 1px;
`;
  readMoreLink.addEventListener("click", function (event) {
    event.preventDefault();
    textEl.style.maxHeight = `60rem`;
    textEl.classList.add("reviews__text-trunk");
    textEl.parentElement.removeChild(readMoreLink);
    textEl.parentElement.appendChild(readLessLink);
  });
  readLessLink.addEventListener("click", function (e) {
    e.preventDefault();
    textEl.style.maxHeight = `11.5rem`;
    textEl.classList.remove("reviews__text-trunk");
    textEl.parentElement.removeChild(readLessLink);
    textEl.parentElement.appendChild(readMoreLink);
  });
  if (textEl.scrollHeight > textEl.offsetHeight) {
    textEl.parentElement.appendChild(readMoreLink);
  }
});
