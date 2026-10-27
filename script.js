"use strict";
const year = document.querySelectorAll("[data-year]");
year.forEach((el) => { el.textContent = new Date().getFullYear(); });
