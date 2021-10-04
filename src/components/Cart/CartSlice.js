const { createSlice } = require('@reduxjs/toolkit');
const cartSlice = createSlice({
    initialState: {
        showMiniCart: false,
        // danh sách các item trong giỏ hàng
        cartItem: [],

    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        addToCart(state, action) {
            // newItem={product.id,product,quantity}
            const newItem=action.payload;
            const index=state.cartItem.findIndex(x=>x.id===newItem.id)
            if(index>=0){
                // increase quantity
                state.cartItem[index].quantity+=newItem.quantity;
            }
            else{
                // add
                state.cartItem.push(newItem);
            }
        },
        setQuantity(state, action) 
        // cap nhat 
        {
            const { id, quantity } = action.payload;
            //Check id
            const index=state.cartItem.findIndex(x=>x.id===id)
            if(index>=0){
                state.cartItem[index].quantity=quantity;
            }
        },
        removeFromCart(state, action) {
            const idNeedRemove = action.payload;
            state.cartItem = state.cartItem.filter(x => x.id != idNeedRemove);
        },
    },
});

const { actions, reducers } = cartSlice;
// Action
export const { showMiniCart, hideMiniCart } = actions; //named export

export default reducers; //default export