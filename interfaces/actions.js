import { wrapper } from "../logics/globals.js"
import { renderHeader, renderFooter, renderBackButton, renderAllActions } from "../logics/rendering.js"

export function actions() {
    wrapper.innerHTML = ""

    renderHeader(wrapper, "profile", "this is your profile.")

    const actionsMainContainer = document.createElement("section")
    actionsMainContainer.classList.add("action-mainContainer")
    wrapper.append(actionsMainContainer)

    renderBackButton(actionsMainContainer)

    renderAllActions(actionsMainContainer)

    renderFooter(wrapper)
}