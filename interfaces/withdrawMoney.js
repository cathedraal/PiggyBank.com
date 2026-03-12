import { wrapper } from "../logics/globals.js"
import { renderHeader, renderBackButton, renderChooseWallet, renderFooter } from "../logics/rendering.js"

// page where user can withdraw some of his money
export function withdrawMoney() {
    wrapper.innerHTML = ''
    
    // header
    renderHeader(wrapper, 'Withdraw money')

    const withdrawMoneyMainContainer = document.createElement('main')
    withdrawMoneyMainContainer.classList.add('withdrawMoney-mainContainer')
    wrapper.append(withdrawMoneyMainContainer)

    // back button
    renderBackButton(withdrawMoneyMainContainer)

    renderChooseWallet(withdrawMoneyMainContainer, 'Withdraw money')

    renderFooter(wrapper)
}