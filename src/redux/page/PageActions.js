import { NAVIGATE_ABOUTPAGE, NAVIGATE_CONTACTPAGE, NAVIGATE_HOMEPAGE, OPEN_LOGINFORM, CLOSE_LOGINFORM} from "./PageTypes";


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

export const openLoginForm=() => {
    return{
        type:OPEN_LOGINFORM
    }
}

export const closeLoginForm=() => {
    return{
        type:CLOSE_LOGINFORM
    }
}
