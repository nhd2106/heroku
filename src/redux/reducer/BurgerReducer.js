

const burgerState = {
    burger: {salad: 1, cheese: 1, beef: 1},
    menu: {
        salad: 10,
        cheese: 20,
        beef: 25
    },
    total: 55
}
export const BurgerReducer = (state = burgerState,action) =>{

    return {...state}
}
