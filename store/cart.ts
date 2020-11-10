import { Cart, CartItem, Product } from "@/domain/models";
import _ from "lodash";
import cartHandler from "~/services/cartHandler";

export const state = () => ({
    phonePrefix: '',
    phoneNumber: '',
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
        state: Cart,
        product: Product): void {

        const cartBefore = _.cloneDeep(state.cartItems);
        const cartItem = find(state, product);
        if (cartItem) {
            cartItem.quantity++;
        }
        else {
            state.cartItems.push(buildCartRecord(product, 1));
        }
        const cartAfter = _.cloneDeep(state.cartItems);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    decrementCartProduct(
        state: Cart,
        product: Product): void {
        const cartBefore = _.cloneDeep(state.cartItems);

        const cartItem = find(state, product);

        if (cartItem && cartItem.quantity > 0) {
            cartItem.quantity--;
            if (cartItem.quantity === 0) {
                _.remove(state.cartItems, q(product));
            }
        }
        const cartAfter = _.cloneDeep(state.cartItems);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    setPhonePrefix: (
        state: Cart,
        phonePrefix: String): void => {
        state.phonePrefix = phonePrefix;
    },
    setPhoneNumber: (
        state: Cart,
        phoneNumber: String): void => {
        state.phoneNumber = phoneNumber;
    },
}
export const getters = {
    cartTotal: (state: Cart) => (): number => {
        let total = 0
        state.cartItems.forEach(
            (ci) => (total += ci.quantity * ci.product.price)
        )
        return total
    },
    getPhonePrefix: (state: Cart) => (): String => {
        return state.phonePrefix;
    },
    getPhoneNumber: (state: Cart) => (): String => {
        return state.phoneNumber;
    },
    getCartItemQuantity: (state: Cart) => (product: Product): number =>
        find(state, product)?.quantity || 0,
    getCartItemsCount: (state: Cart) => (): number => {
        let c = 0;
        state.cartItems.forEach(ci => c = c + ci.quantity);
        return c;
    },
    getCart: (state: Cart) => (): { cartItems: CartItem[] } => state,
    getCartTotal: (state: Cart) => (): number => {
        let total = 0
        state.cartItems.forEach(
            (ci) => (total += ci.quantity * ci.product.price)
        )
        return total
    },
}