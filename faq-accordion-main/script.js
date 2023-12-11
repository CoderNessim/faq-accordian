"use strict";

const expand = document.querySelectorAll(".expand");
const collapse = document.querySelectorAll(".collapse");
const p = document.querySelectorAll("p");

expand.forEach(function(section) {
  section.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('text');
    this.classList.toggle('collapse');

    expand.forEach((e) => {
      if (e !== this && e.classList.contains('collapse')) {
        e.nextElementSibling.classList.toggle('text');
        e.classList.toggle('collapse');
        e.classList.add('expand');
      }
    });
  });
});