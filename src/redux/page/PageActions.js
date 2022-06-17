import { NAVIGATE_ABOUTPAGE, NAVIGATE_CONTACTPAGE, NAVIGATE_HOMEPAGE, NAVIGATE_SCHOOL, OPEN_LOGINFORM, CLOSE_LOGINFORM, OPEN_SIGNUPFORM, CLOSE_SIGNUPFORM, } from "./PageTypes";


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

export const navigateSchool=() => {
    return{
        type:NAVIGATE_SCHOOL
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

export const openSignupForm=() => {
    return{
        type:OPEN_SIGNUPFORM
    }
}

export const closeSignupForm=() => {
    return{
        type:CLOSE_SIGNUPFORM
    }
}
