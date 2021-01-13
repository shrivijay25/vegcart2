import  { setProducts, updateProducts, cart }  from "../Constants"

 const init_state={
     rawProducts:[],
     filteredProducts:[],
     inCart:[]
 }
 
 const counterReducer=(state=init_state,action) => {
    switch(action.type){
        
        case setProducts:
            return {
                ...state,
                rawProducts:action.payload
            }
        
        case updateProducts:
            return {
                ...state,
                filteredProducts:action.payload
            }
        
        case cart:
            return {
                ...state,
                inCart:action.payload
            }

        default:
             return state
    }
}


export default counterReducer