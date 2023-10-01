
function createMenu() {

    const menu = document.createElement('div')
    menu.classList.add('menu')
    
    console.log('making the menu its a me mario ')
    menu.appendChild(
        createMenuItem(
          "Salsiccia",
          "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Gamberi",
          "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pepe",
          "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Disgustoso",
          "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Colorato",
          "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pomodoro",
          "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Crema",
          "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Carne",
          "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
        )
      );

    return menu;
}

function createMenuItem(title, text) {
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('menu-item')
    const itemImg = document.createElement('img')
    const itemTitle = document.createElement('div')
    const itemDescription = document.createElement('div')
    itemTitle.textContent = title;
    itemDescription.textContent = text;
    itemImg.src = `images/pizzas/${title.toLowerCase()}.png`
    itemContainer.appendChild(itemImg)
    itemContainer.appendChild(itemTitle)
    itemContainer.appendChild(itemDescription)

    return itemContainer;
}

function loadMenu() {
    const main = document.getElementById('main')
    main.textContent = ""
    main.appendChild(createMenu())
}

export default loadMenu;