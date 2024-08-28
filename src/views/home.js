import "../styles.css";
import lantern from '../images/lantern.png'
import arrow from '../images/arrow.png'

let mainContent = document.querySelector("#content")

const home = (() => {
    // const home = document.querySelector(".home")
    const homeButton = document.querySelector(".nav-home")

    // create a home container

    const renderHome = () => {
        const home = document.createElement("div")
        home.setAttribute('class', 'home')

        // div image container
        const imageContainer = document.createElement("div")
        imageContainer.setAttribute('class', 'image')

        // the lantern image
        const lanternImage = document.createElement("img")
        lanternImage.src = lantern
        lanternImage.width = 900
        lanternImage.height = 676

        // appending divs
        imageContainer.appendChild(lanternImage)

        mainContent.appendChild(home)

        const japaneseContainer = document.createElement("div")
        japaneseContainer.setAttribute('class', 'japanese-container')

        const japaneseText = document.createElement('p')
        japaneseText.textContent = "寿司のシンフォニーを味わってください。"

        const arrowContainer = document.createElement("div")
        arrowContainer.setAttribute('class', 'arrow')

        const arrowImage = document.createElement("img")
        arrowImage.src = arrow
        arrowImage.height = 321
        arrowContainer.appendChild(arrowImage)


        const bannerText = document.createElement("p")
        bannerText.textContent = 'Delectable. Scrumptious. Luscious. Savory. Ambrosial.'

        japaneseContainer.append(japaneseText, arrowContainer, bannerText)

        home.append(imageContainer, japaneseContainer)

    }

    return { renderHome }

})()
export default home

// home.renderHome()



