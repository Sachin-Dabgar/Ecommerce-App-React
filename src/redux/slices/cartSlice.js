const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // action to add item to the cart
        addItem: (state, action) => {
            const newItem = action.payload;
            // finding the existing item
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            // incrementing the quantitiy
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((acc, currentItem) => {
                return Number(currentItem.totalPrice) + acc;
            }, 0);
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            state.cartItems.forEach((item) => {
                if (item.id === id) {
                    if (item.quantity === 1) {
                        state.cartItems = state.cartItems.filter(
                            (item) => item.id !== id
                        );
                        return;
                    }
                    item.quantity--;
                    item.totalPrice -= item.price;
                }
            });
            state.totalQuantity = state.totalQuantity - 1;
            state.totalAmount = state.cartItems.reduce((acc, currentItem) => {
                return Number(currentItem.totalPrice) + acc;
            }, 0);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
