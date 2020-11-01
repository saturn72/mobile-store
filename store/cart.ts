import { CartItem, Product } from "~/components/models";

export const state = () => ({
    cartItems: []
})

export const mutations = {
    addItem(state: any, product: Product) {
        const q = (c: CartItem) => c.product.id === product.id;
        const itemInCart = state.cartItems.some(q);
        if (itemInCart) {
            state.cartItems.push({ quantity: 1, product: product });
        }
        else {
            const idx = state.cartItems.findIndex(q);
            const u = {
                quantity: state.cartItems[idx].quantity++,
                product: product
            };
            state.cartItems[idx] = u;
        }
    },
    removeItem(state: any, product: Product) {
        const q = (c: CartItem) => c.product.id === product.id;
        const itemInCart = state.cartItems.some(q);
        if (itemInCart) {
            const idx = state.cartItems.findIndex(q);
            const newQty = state.cartItems[idx].quantity++;
            if (newQty === 0) {
                state.cartItems.splice(idx, 1)
            }
            else {
                const u = {
                    quantity: newQty,
                    product: product
                };
                state.cartItems[idx] = u;
            }
        }
    },
}