import { user, currencyChosen } from "../logics/globals.js"
import { renderHeader, renderCurrency, renderBenefits, renderWallet, renderActions, renderNews, renderLogoutButton, renderFooter, renderEmptyWallet } from "../logics/rendering.js"
import { getRandomInt } from "../logics/logic.js"

const hours = new Date().getHours()
const phrases = ['what shall we do today?', `what's on your mind today?`, `what's up?`, `it's ${hours} o'clock now.`]

// main lobby where user sees his main card, buttons, logs, news
export function menu() {
    wrapper.innerHTML = ''

    console.log(currencyChosen)

    // header section
    renderHeader(wrapper, 'menu', phrases[getRandomInt(0, phrases.length-1)])

    // content container
    const menuMainContainer = document.createElement('main')
    menuMainContainer.classList.add('menu-mainContainer')
    wrapper.append(menuMainContainer)

    if (user.userCards.length === 0) {
        renderEmptyWallet(menuMainContainer)
    } else {
        // currency section
        renderCurrency(menuMainContainer, "Trading in", true, currencyChosen)

        // wallet section
        renderWallet(menuMainContainer)
    }

    // latest actions section
    renderActions(menuMainContainer)

    // news section
    renderNews(menuMainContainer)
    
    // benefits section
    renderBenefits(menuMainContainer)

    // log out button section
    renderLogoutButton(menuMainContainer)

    // footer section
    renderFooter(wrapper)
}