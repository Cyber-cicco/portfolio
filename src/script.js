import { titleWriting } from './js/writing-functions.js';
import { cursorBlink, transitionCursorBlink } from './js/cursor-functions.js';
import { subtitleWriting } from './js/writing-functions.js';
import { descriptionWriting } from './js/writing-functions.js';
import { loadCanvas } from './lib/particles.js';

const bourger = document.getElementById('bourger')
const navPhone = document.getElementById('nav-phone')

const elAccueil = document.querySelectorAll('#nav-accueil')
const accueil = document.querySelector('#accueil')

const elAPropos = document.querySelectorAll('#nav-a-propos')
const aPropos = document.querySelector('#a-propos')

const elProjets = document.querySelectorAll('#nav-projets')
const projets = document.querySelector('#projets')

const elCompetences = document.querySelectorAll('#nav-competences')
const competences = document.querySelector('#competences')

const elExperiences = document.querySelectorAll('#nav-experiences')
const experiences = document.querySelector('#experiences')

const elContact = document.querySelectorAll('#nav-contact')
const contact = document.querySelector('#contact')

const scroll = {
    behavior:"smooth",
}

document.onload = async function() {
  await titleWriting();
  await transitionCursorBlink();
  await subtitleWriting();
  await transitionCursorBlink();
  await descriptionWriting();
  //setTimeout(loadCanvas, 230);  
  cursorBlink();
}();

const scroller = (element, scrollElement) =>{
  element.forEach((e) => {
    e.addEventListener("click", (e) => {
      scrollElement.scrollIntoView(scroll);
    })
  })
}

scroller(elAccueil, accueil);
scroller(elAPropos, aPropos);
scroller(elCompetences, competences);
scroller(elProjets, projets);
scroller(elExperiences, experiences);
scroller(elContact, contact);

bourger.addEventListener("click", (e)=> {
  navPhone.style.display == "block" ? navPhone.style.display = "none" : navPhone.style.display = "block" 
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    navPhone.style.display = "none"
  } else {
    document.getElementById("navbar").style.top = "-100px";
    navPhone.style.display = "none"
  }
  prevScrollpos = currentScrollPos;
} 