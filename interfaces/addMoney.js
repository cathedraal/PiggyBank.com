import { wrapper } from "../logics/globals.js"
import { renderHeader, renderBackButton, renderChooseWallet, renderFooter } from "../logics/rendering.js"

// page where user adds money to his card
export function addMoney() {
    wrapper.innerHTML = ''
    
    // header
    renderHeader(wrapper, 'Add money')

    const addMoneyMainContainer = document.createElement('main')
    addMoneyMainContainer.classList.add('addMoney-mainContainer')
    wrapper.append(addMoneyMainContainer)

    //render back button
    renderBackButton(addMoneyMainContainer)

    renderChooseWallet(addMoneyMainContainer, 'Add money')

    renderFooter(wrapper)
}