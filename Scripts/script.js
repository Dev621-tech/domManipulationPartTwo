let mainEL = document.getElementsByTagName('main');

mainEL[0].style.backgroundColor = 'var(--main-bg)'


let header = document.createElement('h1');
header.textContent = 'DOM Manipulation'

mainEL[0].append(header);

mainEL[0].classList.add('flex-ctr');

// Part Two

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

// Part Three 

// Menu data structure
var menuLinks = [

    { text: 'about', href: '/about' },

    {
        text: 'catalog', href: '#', subLinks: [

            { text: 'all', href: '/catalog/all' },

            { text: 'top selling', href: '/catalog/top' },

            { text: 'search', href: '/catalog/search' },

        ]
    },

    {
        text: 'orders', href: '#', subLinks: [

            { text: 'new', href: '/orders/new' },

            { text: 'pending', href: '/orders/pending' },

            { text: 'history', href: '/orders/history' },

        ]
    },

    {
        text: 'account', href: '#', subLinks: [

            { text: 'profile', href: '/account/profile' },

            { text: 'sign out', href: '/account/signout' },

        ]
    },

];

menuLinks.forEach(link => {
    let a = document.createElement('a');

    a.href = link.href; // a.setAttribute("href", link.href);

    a.textContent = link.text;

    topMenuEl.appendChild(a);
});

// STARTING LAB

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

// Temporarily Hiding SubMenu
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


// buildSubmenu helper function
function buildSubmenu (subLinks) {
    // clears previous links
    subMenuEl.innerHTML = '';

    subLinks.forEach(link =>{
        const a = document.createElement('a');

        a.href = link.href;

        a.textContent = link.text;

        subMenuEl.appendChild(a);
    });
}

// PART 4: ADDING MENU INTERACTION

let topMenuLinks = topMenuEl.getElementsByTagName('A');

topMenuEl.addEventListener('click', (e) => {
   
    e.preventDefault();

    
    if(e.target.tagName !== ('A')) return;

    
// go through each link and remove active if its not clicked (e.target)
  for (let link of topMenuLinks){
    if (link !== e.target){
        link.classList.remove('active');
    }
  }

  // variable notActive is a e.target that is NOT ACTIVE
//   const notActive = !e.target.classList.contains('active');
  
// if active , makes it unactive
// if unactive, makes it active
  e.target.classList.toggle('active')

  // search through menuLinks array and find the one object whose text matches the text of the clicked <a>

  // .find() loops through the array one item at a time a returns the first item that matches a condtion

  // is the menu object's text the same as the clicked link's text

  const linkObject = menuLinks.find(
    link => link.text === e.target.textContent
  );


  // if the clicked <a> is active and does it have subLinks show them , if NOT show nothing
  if (e.target.classList.contains('active') && linkObject.subLinks){
    subMenuEl.style.top = '100%';

    buildSubmenu(linkObject.subLinks);


  } else {
    subMenuEl.style.top = '0%'
  }

});


