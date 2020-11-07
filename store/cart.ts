import { CartItem, Product } from "~/components/models";
import _ from "lodash";

export const state = () => ({
    cartItems: [],
})

const DEFAULT_CART_IMAGE: string = 'https://kedemmarket.co.il/wp-content/uploads/2020/07/logodesign-scaled.jpg';
const q = (product: Product) => (ci: CartItem) => ci.product.id === product.id
const find = (state: { cartItems: CartItem[] }, product: Product) => state.cartItems?.find(q(product));

const buildCartRecord = (product: Product, quantity: number): CartItem => {
    const p = {
        ...product,
        cartImage: product.media.cartImage ?? product.media.images.find(i => i.isPrimary) ?? DEFAULT_CART_IMAGE
    };

    return {
        product: p,
        quantity: 1,
        updatedOnUtc: new Date().getUTCDate()
    };
}
export const mutations = {
    incrementCartProduct(
        state: { cartItems: CartItem[] },
        product: Product): void {
        const cartProduct = find(state, product);
        if (cartProduct) {
            cartProduct.quantity++;
        }
        else {
            state.cartItems.push(buildCartRecord(product, 1));
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
    cartItemsCount: (state: { cartItems: CartItem[] }) => (): number => {
        let c = 0;
        state.cartItems.forEach(ci => c = c + ci.quantity);
        return c;
    },
    cartItems: (state: { cartItems: CartItem[] }) => (): CartItem[] => state.cartItems,
    cartTotal: (state: { cartItems: CartItem[] }) => (): number => {
        let total = 0
        state.cartItems.forEach(
            (ci) => (total += ci.quantity * ci.product.price)
        )
        return total
    },
}