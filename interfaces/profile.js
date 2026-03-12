// TODO page where user sees profile details, card details

import { user, wrapper } from "../logics/globals.js"
import { renderHeader, renderFooter, renderLogoutButton, renderBackButton, renderPersonalDetails, renderWalletsDetails } from "../logics/rendering.js"

export function profile() {
    wrapper.innerHTML = ""

    renderHeader(wrapper, "profile", "this is your profile.")

    const profileMainContainer = document.createElement("section")
    profileMainContainer.classList.add("profile-mainContainer")
    wrapper.append(profileMainContainer)

    renderBackButton(profileMainContainer)

    renderPersonalDetails(profileMainContainer)

    renderWalletsDetails(profileMainContainer)

    renderLogoutButton(profileMainContainer)

    renderFooter(wrapper)
}