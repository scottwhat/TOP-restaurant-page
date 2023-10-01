import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";


function createHeader(){

    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header')

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('restaurant-name')
    restaurantName.textContent = "Sesame Street Pizza"
    headerContainer.appendChild(restaurantName)

    
    //buttons
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('btn-container')
    
    const homeButton = document.createElement('button')
    homeButton.classList.add('btn-home')
    homeButton.textContent = 'Home'
    homeButton.classList.add("button-nav")

    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    })
    buttonContainer.appendChild(homeButton)

    const menuButton = document.createElement('button')
    menuButton.classList.add('btn-menu')
    menuButton.classList.add("button-nav")
    menuButton.textContent = "Menu"
    buttonContainer.appendChild(menuButton)

    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadMenu();
    })



    const contactButton = document.createElement('button')
    contactButton.classList.add('btn-contact')
    contactButton.classList.add("button-nav")
    contactButton.textContent = "Contact"
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);loadContact();
    })


    buttonContainer.appendChild(contactButton)

    headerContainer.appendChild(buttonContainer)

    
    return headerContainer;

}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

function createFooter(){
    const footerContainer =  document.createElement('footer')

    footerContainer.textContent = "Copyrighted 2035 by timetravellers"
    footerContainer.classList.add('footer')

    return footerContainer;
    
}

//footer



function initialiseWebsite() {
    const domObj = document.getElementById('content')
    domObj.appendChild(createHeader())
    domObj.appendChild(createMain())
    domObj.appendChild(createFooter()) 
    setActiveButton(document.querySelector(".button-nav"));

    loadHome()
}



function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }
export default initialiseWebsite;
