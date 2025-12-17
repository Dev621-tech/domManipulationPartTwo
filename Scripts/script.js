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
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

menuLinks.forEach(link =>{
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
