export const SET_CART="SET_CART"

export  function setCart(value){
    return {
        type:SET_CART,
        payload:value
    }
}