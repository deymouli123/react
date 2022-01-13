

import { NAVIGATE_ABOUTPAGE, NAVIGATE_CONTACTPAGE,  NAVIGATE_HOMEPAGE, OPEN_LOGINFORM, CLOSE_LOGINFORM} from "./PageTypes";

const initialState={
    page:'LandingPage',
    showLoginForm: false
}

const PageReducer=( state=initialState ,action)=>{
    switch(action.type){
        case NAVIGATE_ABOUTPAGE:return{
            ...state,
            page:'AboutPage'
        
        }
        case NAVIGATE_CONTACTPAGE:return{
            ...state,
            page:'ContactPage'
        
        }
        case NAVIGATE_HOMEPAGE:return{
            ...state,
            page:'LandingPage'
        
        }
        case OPEN_LOGINFORM:return{
            ...state,
            showLoginForm: true
        
        }
        case CLOSE_LOGINFORM:return{
            ...state,
            showLoginForm: false
        
        }

        default:return state
    }
}
export default PageReducer;