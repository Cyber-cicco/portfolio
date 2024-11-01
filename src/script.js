import { titleWriting } from './js/writing-functions.js';
import { cursorBlink, transitionCursorBlink } from './js/cursor-functions.js';
import { subtitleWriting } from './js/writing-functions.js';

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

const presentationContainer = document.getElementById("presentation")

const scroll = {
    behavior:"smooth",
}

let $ = (content) => document.querySelector(content);
let $$ = (content) => document.querySelectorAll(content);
const observerContructor = (animation) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animation);
        observer.unobserve(entry.target);
      }
    });
  })
}

document.onload = async function() {
  let reveals = $$('[data-fadein]');
  let fadeLefts = $$('[data-fadeleft]');
  let fadeRights = $$('[data-faderight]');
  let fadeUps = $$('[data-fadeup]');
  const revealObserver = observerContructor('fade-in');
  const fadeLeftObserver = observerContructor('fade-left');
  const fadeRightObserver = observerContructor('fade-right');
  const fadeUpObserver = observerContructor('fade-up');
  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
  fadeLefts.forEach(reveal => {
      fadeLeftObserver.observe(reveal);
  });
  fadeRights.forEach(reveal => {
      fadeRightObserver.observe(reveal);
  });
  fadeUps.forEach(reveal => {
      fadeUpObserver.observe(reveal);
  });
  //setTimeout(loadCanvas, 230);
  await titleWriting();
  await transitionCursorBlink();
  await subtitleWriting();
  presentationContainer.style.opacity = 1;
  presentationContainer.style.transition = "opacity 1s";
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
