import { CartItem, Product } from "~/components/models";
import _ from "lodash";

export const state = () => ({
    cartItems: [],
})

const q = (product: Product) => (ci: CartItem) => ci.product.id === product.id
const find = (state: { cartItems: CartItem[] }, product: Product) => state.cartItems?.find(q(product));
export const mutations = {
    incrementCartProduct(
        state: { cartItems: CartItem[] },
        product: Product): void {
        const cartProduct = find(state, product);
        if (cartProduct) {
            cartProduct.quantity++;
        }
        else {
            state.cartItems.push({
                product: product,
                quantity: 1,
                updatedOnUtc: new Date().getUTCDate()
            });
        }
    },
    decrementCartProduct(
        state: { cartItems: CartItem[] },
        product: Product): void {
        const cartProduct = find(state, product);

        if (cartProduct && cartProduct.quantity > 0) {
            cartProduct.quantity--;
            if (cartProduct.quantity === 0) {
                _.remove(state.cartItems, q(product));
            }
        }
    }
}
export const getters = {
    cartItemQuantity: (state: { cartItems: CartItem[] }) => (product: Product): number =>
        find(state, product)?.quantity || 0,
}