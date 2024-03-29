const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const initialState = {
    cartItems: cartItems,
};


export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const alreadyExists = state.cartItems.filter(item => item._id === action.payload._id)

            if (alreadyExists.length > 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                }
            }
        case "DELETE_TO_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id),
            }
        default:
            return state;
    }
}
