
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
const navigation = document.getElementById('navbar_list');
const section = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
section.forEach(section => {
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  //navItemLink.innerHTML = section.getAttribute("data-nav");
  navItem.classList.add(section.id);
  navItemLink.href = `#${section.id}`;
  navigation.appendChild(navItem);
  navItem.appendChild(navItemLink);
  docFrag.appendChild(navItem);
})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
//document.getElementById("navbar_list").addEventListener("click", function(){
//document.getElementById("section").innerText = "";})


// Build menu 




   // navItemLink.textContent = section.dataset.nav;
    //navItem.appendChild(navItemLink);
    //navList.appendChild(navItem);

// Scroll to section on link click







// Set sections as active
//const active = document.querySelectorAll('li'); if

//getBoundingClientRect()