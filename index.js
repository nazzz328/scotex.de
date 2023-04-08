///////   Read more (Lese weiter) functionality on reviews

const textEls = document.querySelectorAll(".reviews__text");
const mediaQuery = window.matchMedia("(max-width: 1100px)");
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
    if (mediaQuery.matches) textEl.style.maxHeight = `8rem`;
    else textEl.style.maxHeight = `11.5rem`;
    textEl.classList.remove("reviews__text-trunk");
    textEl.parentElement.removeChild(readLessLink);
    textEl.parentElement.appendChild(readMoreLink);
  });
  if (textEl.scrollHeight > textEl.offsetHeight) {
    textEl.parentElement.appendChild(readMoreLink);
  }
});

/////// Slider functionality

const sliderBtns = document.querySelectorAll(".article__gallery-button");
const mainImg = document.querySelector(".article__gallery-main-image");
let activeBtn;

const changeActiveBtn = (btn) => {
  if (activeBtn) activeBtn.classList.remove("article__gallery-button--active");
  activeBtn = btn;
  activeBtn.classList.add("article__gallery-button--active");
};
sliderBtns.forEach((btn) => {
  if (btn.querySelector("img").src === mainImg.src) changeActiveBtn(btn);
  btn.addEventListener("mouseenter", function (e) {
    changeActiveBtn(btn);
    const img = e.currentTarget
      .closest(".article__gallery-button")
      .querySelector("img");
    mainImg.classList.add("article__gallery-main-image-fade-in");
    setTimeout(() => {
      mainImg.src = img.src;
      mainImg.classList.remove("article__gallery-main-image-fade-in");
      mainImg.classList.add("article__gallery-main-image-fade-in--active");
    }, 200);
    mainImg.classList.remove("article__gallery-main-image-fade-in--active");
  });
});
console.log(activeBtn);
