
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
const navItem = document.querySelectorAll('li');
let allNavLink = document.querySelectorAll('li ul navbar__menu a')
const active = document.getElementsByClassName("active")
let activeNav = document.querySelector('.active-nav');


// Build the Navigation
sections.forEach(section => {
  const docFrag = document.createDocumentFragment();
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  navItem.classList.add(section.id);
  navItemLink.textContent = section.id;
  navItem.setAttribute('data-id', section.id);
  navItem.id = `nav-${section.id}`;
 // Adding smooth scrolling
 navItem.addEventListener('click', event => {
  section.scrollIntoView({
    behavior:"smooth",
    block: "start"
  });
});
  navItem.appendChild(navItemLink);
  docFrag.appendChild(navItem);
  navigation.appendChild(docFrag);
})


// Add class 'active' to section when near top of viewport
function checkView(section){
    let position = section.getBoundingClientRect();
    return(position.top <= 200 && position.bottom >= 200)
}

//Active class on scroll
window.addEventListener('scroll', event => {
  sections.forEach(section => { 
    if (checkView(section)){
      //Adds active-nav on scroll
      let id = section.getAttribute('id');
      document.querySelector(`.${id}`).classList.add('active-nav');
      //Adds active class to section
        section.classList.add('active');
    } else {
       //Removes active-nav on scroll
      let id = section.getAttribute('id');
      document.querySelector(`.${id}`).classList.remove('active-nav')
      //Removes active class to section
      section.classList.remove('active');
    } 
  });
  });

 