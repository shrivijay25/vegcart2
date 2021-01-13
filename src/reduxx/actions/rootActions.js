import  { setProducts, updateProducts, cart }  from "../Constants"
    
export const  increment = (nr) => {
    return {
        type:"INC",
        payload:nr
    }
}

export const rawProducts = (obj) => {
    return {
        type: setProducts,
        payload: obj
    }
}

export const filterProducts = (obj) => {
    return {
        type: updateProducts,
        payload: obj
    }
}

export const cartValues = (obj) =>{
    return {
        type: cart,
        payload: obj
    }
}

