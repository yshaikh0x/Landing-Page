
 /* 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * n
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('li');
const active = document.getElementsByClassName("active")

// build the nav
sections.forEach(section => {
  const docFrag = document.createDocumentFragment();
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  navItem.classList.add(section.id);
  navItemLink.textContent = section.id;
  navItemLink.href =`#${section.id}`;
  navItem.appendChild(navItemLink);
  docFrag.appendChild(navItem);
  navigation.appendChild(docFrag);
})


// Add class 'active' to section when near top of viewport
/*sections.forEach(section => {
    let position = section.getBoundingClientRect();
    //console.log(position); to check measurement
   if 
   position.top <= 150 && position.bottom >= 150
   )
       section.classList.add('active');
            } else {
         section.classList.remove('active');
      }
})*/

function checkView(section){
    let position = section.getBoundingClientRect();
    return(position.top <= 150 && position.bottom >= 150)
}

//Active navigation on scroll
window.addEventListener('scroll', event => {
// let navLinks = document.querySelectorAll('ul li');
 // let fromTop = window.scrollY;
  sections.forEach(section => { 
    if (checkView(section)){
        section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});





