const textEls = document.querySelectorAll(".reviews__text");
textEls.forEach((textEl) => {
  if (textEl.scrollHeight > textEl.offsetHeight) {
    const readMoreLink = document.createElement("a");
    readMoreLink.href = "#";
    readMoreLink.textContent = "Lese weiter";
    readMoreLink.style.cssText = `
  color: #719d0b;
  text-decoration-thickness: 1px;
  `;
    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      //   textEl.classList.add("reviews__text-trunk");
      //   textEl.parentNode.removeChild(readMoreLink);
    });

    textEl.parentNode.appendChild(readMoreLink);
  }
});
