import data from '../models/Menu_Model.js'

const menu = (() => {
    const content = document.querySelector("#content");
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute('class', 'menu-container');

    let isRendered = false;

    const renderCards = () => {
        if (!isRendered) {
            data.forEach(item => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const image = document.createElement('img');
                image.setAttribute('class', 'photo');
                image.src = item.imageURL;

                const cardInfo = document.createElement('div');
                cardInfo.setAttribute('class', 'card-info');

                const name = document.createElement('p');
                name.textContent = item.name;
                const price = document.createElement('p');
                price.textContent = `$${item.price}.00`;

                cardInfo.append(name, price);
                card.append(image, cardInfo);
                menuContainer.appendChild(card);
            });

            menu.append(menuContainer);
            isRendered = true; 
        }

        if (!content.contains(menu)) {
            content.appendChild(menu); // Append only if it's not already in the content
        }
    };

    

    return { renderCards };
})();

export default menu;