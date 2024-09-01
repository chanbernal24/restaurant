import "../styles.css";
import restauImg from '../images/restau.png'


const about = (() => {



    const renderAbout = () => {

        const container = document.querySelector("#content")
        let isRendered = false
        const about = document.createElement("div")
        about.setAttribute('class', "about")


        const aboutContainer = document.createElement("div")
        aboutContainer.setAttribute('class', 'about-container')
        let yearNumber = 1991


        const yearsContainer = document.createElement('div')
        yearsContainer.setAttribute('class', 'years')

        if (!isRendered) {
            for (let i = 0; i <= 4; i++) {
                yearNumber += 1

                const year = document.createElement('p')
                year.textContent = yearNumber
                yearsContainer.appendChild(year)
            }

            const separator = document.createElement('div')
            separator.setAttribute('class', 'separator-two')

            const aboutSection = document.createElement('div')
            aboutSection.setAttribute('class', 'about-section')

            const imageContainer = document.createElement('div')
            const restaurantImage = document.createElement('img')
            restaurantImage.src = restauImg
            imageContainer.setAttribute('class', 'image-restau')


            const aboutInfo = document.createElement('div')
            aboutInfo.setAttribute('class', 'about-info')


            const title = document.createElement('p')
            title.textContent = '1992 Celebrating 10th Anniversary'

            const description = document.createElement('p')
            description.textContent = "At our beloved restaurant, we’re thrilled to commemorate a decade of serving exquisite Japanese dishes. We’ve been dedicated to bringing you the finest flavors, artful presentations, and warm hospitality. Join us as we raise our glasses to ten years of culinary excellence!"

            aboutInfo.append(title, description)
            imageContainer.append(restaurantImage)
            aboutSection.append(imageContainer, aboutInfo)

            aboutContainer.append(yearsContainer, separator, aboutSection)
            about.appendChild(aboutContainer)
            isRendered = true
        }

        if (!container.contains(about)) {
            container.appendChild(about)

        }

    }

    return { renderAbout }
})()

export default about