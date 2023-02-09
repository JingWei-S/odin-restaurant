import createMenu from "./menu";
import getHome from "./home";


const content = document.querySelector('#content');
// create the nav clas
const nav = document.createElement('div');
nav.classList.add("nav");
// the name
const res_name = document.createElement('div');
res_name.setAttribute('id', 'name');
res_name.textContent = "Jing's Bistro";
nav.appendChild(res_name);
// the nav-bar
const nav_bar = document.createElement('nav');
const nav_home = document.createElement('button');
nav_home.textContent = 'Home';
nav_home.classList.add('btn-nav');
nav_home.classList.add('active');
nav_home.addEventListener("click", (e) => {
    for (const btn of e.target.parentNode.children) {
        if (btn === e.target) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

    }
    getHome();
} );
nav_bar.appendChild(nav_home);
const nav_menu = document.createElement('button');
nav_menu.textContent = 'Menu';
nav_menu.classList.add('btn-nav');
nav_menu.addEventListener("click", (e) => {
    for (const btn of e.target.parentNode.children) {
        if (btn === e.target) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

    }
    createMenu();
} );
nav_bar.appendChild(nav_menu);
const nav_contact = document.createElement('button');
nav_contact.textContent = 'Contact';
nav_contact.classList.add('btn-nav');
nav_bar.appendChild(nav_contact);
console.log(nav_bar);
nav.appendChild(nav_bar);

content.appendChild(nav);

// const main_content = getHome();

// content.appendChild(main_content);

const footer = document.createElement('div');
footer.classList.add('footer');
const footer_p = document.createElement('p');
footer_p.textContent = 'Supported by Jing with ❤️';
footer.appendChild(footer_p);

content.appendChild(footer);

getHome();