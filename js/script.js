"use strict";
const d = document;
const container_ = d.querySelector(".container");
const text_ = d.querySelectorAll(".text");

setInterval(() => {
  container_;
}, 5000);
console.log(text_);
for (let i = 0; i < text_.length; i++) {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  text_[i].style.color = `rgb(${r}, ${g}, ${b})`;
}
