const getHome = () => {
  console.log('from home.js');
  // create main content
  const main_content = document.createElement("div");
  main_content.classList.add("main-content");

  // the image div
  const img_div = document.createElement("div");
  img_div.classList.add("right-img");
  const image = document.createElement("img");
  image.src = "./images/brand-image.png";
  img_div.appendChild(image);
  main_content.appendChild(img_div);

  // the intro div
  const intro_div = document.createElement("div");
  intro_div.classList.add("left-intro");
  const p1 = document.createElement("p");
  p1.textContent = "About Jing's Bistro";
  intro_div.appendChild(p1);
  const p2 = document.createElement("p");
  p2.textContent =
    "Jing has a PhD degree but is also passionate about cooking.";
  intro_div.appendChild(p2);
  const p3 = document.createElement("p");
  p3.textContent = "............";
  intro_div.appendChild(p3);
  const p4 = document.createElement("p");
  p4.textContent =
    "Welcome to Jing's Bistro, where brunch takes on a whole new level of sophistication. Our chic bistro is the perfect escape from the hustle and bustle of everyday life, offering a serene and stylish atmosphere for you to indulge in a sumptuous brunch spread. From mouth-watering entrees to delicious sides and decadent desserts, our menu is designed to tantalize your taste buds and leave you feeling completely satisfied. Each dish is crafted with the freshest ingredients and a touch of finesse, making Jing's Bistro the ideal destination for brunch lovers looking for something truly special.";
  intro_div.appendChild(p4);

  const btn_group = document.createElement("div");
  btn_group.classList.add("btn-group");
  const btn_book = document.createElement("button");
  btn_book.textContent = "Book Now";
  btn_group.appendChild(btn_book);
  const btn_learn = document.createElement("button");
  btn_learn.textContent = "Learn More";
  btn_group.appendChild(btn_learn);
  intro_div.appendChild(btn_group);

  main_content.appendChild(intro_div);

  const content = document.querySelector('#content');
  if (document.querySelector('.menu') || document.querySelector('.contact')) {
    content.removeChild(content.children[1]);
  }
  content.insertBefore(main_content, content.lastChild);
};

export default getHome;
