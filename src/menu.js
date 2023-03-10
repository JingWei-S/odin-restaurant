const createMenu = () => {
    // create a menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const food_photo_src = ['./images/brunch 1.png', './images/brunch 2.png', './images/brunch 3.png',
    './images/brunch 4.png', './images/brunch 5.png', './images/brunch 6.png'];
    const food_names = ["The Devil's Guacamole Grin", "Hell's Flaky Breakfast", "Monster's Frozen Feast",
    "Blood-Thirsty Burrito", "The Brioche of Despair", "Devil's Burning Craving"];

    for (let i = 0; i < 6; i++) {
        const food_div = document.createElement('div');
        food_div.classList.add('food-div');
        const food_img = document.createElement('img');
        food_img.src = food_photo_src[i];
        const food_name = document.createElement('p');
        food_name.textContent = food_names[i];
        food_div.appendChild(food_img);
        food_div.appendChild(food_name);
        menu.appendChild(food_div);
    }

    const content = document.querySelector('#content');
    content.replaceChild(menu, content.children[1]);
}

export default createMenu;