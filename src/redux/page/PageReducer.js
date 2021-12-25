

import { NAVIGATE_PAGE } from "./PageTypes";

const initialState={
    page:'LandingPage'
}
const PageReducer=( state=initialState ,action)=>{
    switch(action.type){
        case NAVIGATE_PAGE:return{
            ...state,
            page:'AboutPage'
        
        }
        case NAVIGATE_PAGE:return{
            ...state,
            page:'ContactPage'
        
        }
        

        default:return state
    }
}
export default PageReducer;