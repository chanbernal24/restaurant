import "./styles.css";
import homeTab from './views/home.js'
import menuTab from './views/menu.js'
import aboutTab from './views/about.js'
import home from "./views/home.js";

// aboutTab.renderAbout()

window.addEventListener('load', () => {
    home.renderHome()
})

const showContent = (() => {
    let content = document.querySelector("#content")

    let home = document.querySelector('.nav-home')
    let menu = document.querySelector('.nav-menu')
    let about = document.querySelector('.nav-about')

    home.addEventListener('click', () => {
        if (content.hasChildNodes()) {
            while (content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            homeTab.renderHome();

        } else {
            homeTab.renderHome();
        }

        home.setAttribute('style', 'border-bottom: 1px solid white; color: #F8F8F8')
        menu.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')
        about.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')
    });

    menu.addEventListener('click', () => {
        if (content.hasChildNodes()) {
            while (content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            menuTab.renderCards();
        } else {
            menuTab.renderCards();
        }
        menu.setAttribute('style', 'border-bottom: 1px solid white; color: #F8F8F8')
        home.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')
        about.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')

    });

    about.addEventListener('click', () => {
        if (content.hasChildNodes()) {
            while (content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            aboutTab.renderAbout();
        } else {
            aboutTab.renderAbout();

        }

        about.setAttribute('style', 'border-bottom: 1px solid white; color: #F8F8F8')
        home.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')
        menu.setAttribute('style', 'color: rgba(248, 248, 248, .5); border: none')
    })


})()

