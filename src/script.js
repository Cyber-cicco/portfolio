import { titleWriting } from './js/writing-functions.js';
import { cursorBlink, transitionCursorBlink } from './js/cursor-functions.js';
import { subtitleWriting } from './js/writing-functions.js';
import { descriptionWriting } from './js/writing-functions.js';

const btnAPropos = document.querySelector('#a-propos-btn')
const aPropos = document.querySelector('#a-propos')

const btnProjets = document.querySelector('#projets-btn')
const projets = document.querySelector('#projets')

const btnCompetences = document.querySelector('#competences-btn')
const competences = document.querySelector('#competences')

const btnExperiences = document.querySelector('#experiences-btn')
const experiences = document.querySelector('#experiences')

const scroll = {
    behavior:"smooth",
}

document.onload = async function() {
  await titleWriting();
  await transitionCursorBlink();
  await subtitleWriting();
  await transitionCursorBlink();
  await descriptionWriting();
  cursorBlink();
}();

btnAPropos.addEventListener("click", (e) => {
  aPropos.scrollIntoView(scroll);
})

btnCompetences.addEventListener("click", (e) => {
  competences.scrollIntoView(scroll);
})

btnExperiences.addEventListener("click", (e) => {
  experiences.scrollIntoView(scroll);
})

btnProjets.addEventListener("click", (e) => {
  projets.scrollIntoView(scroll);
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} 