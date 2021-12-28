import { NAVIGATE_ABOUTPAGE, NAVIGATE_CONTACTPAGE, NAVIGATE_HOMEPAGE } from "./PageTypes";

export const navigateAboutPage=() => {
    return{
        type:NAVIGATE_ABOUTPAGE
    }
}
export const navigateContactPage=() => {
    return{
        type:NAVIGATE_CONTACTPAGE
    }
}

export const navigateHomePage=() => {
    return{
        type:NAVIGATE_HOMEPAGE
    }
}
