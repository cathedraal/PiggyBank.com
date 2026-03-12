import { wrapper } from "../logics/globals.js"
import { renderHeader, renderBackButton, renderRecipientInfo, renderChooseWallet, renderFooter } from "../logics/rendering.js"

// page where user can fill the form to transfer money
export function transferMoney() {
    wrapper.innerHTML = ''
    
    // header
    renderHeader(wrapper, 'Transfer money')

    const transferMoneyMainContainer = document.createElement('main')
    transferMoneyMainContainer.classList.add('transferMoney-mainContainer')
    wrapper.append(transferMoneyMainContainer)

    //render back button
    renderBackButton(transferMoneyMainContainer)

    renderRecipientInfo(transferMoneyMainContainer)

    renderChooseWallet(transferMoneyMainContainer, 'Transfer money')

    renderFooter(wrapper)
}