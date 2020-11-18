import { Cart, CartItem, Product } from "@/domain/models";
import _ from "lodash";
import cartHandler from "~/services/cartHandler";
import dateTimeUtil from "~/utilities/dateTimeUtil";

export const state = (): Cart => ({
    phonePrefix: '',
    phoneNumber: '',
    cartItems: [],
    comment: ''
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
        updatedOnUtc: dateTimeUtil.currentUtc()
    };
}
export const mutations = {
    clearCart(state: Cart): void {
        const cartBefore = _.cloneDeep(state);
        state.cartItems = [];
        state.comment = '';
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    incrementCartProduct(
        state: Cart,
        product: Product): void {

        const cartBefore = _.cloneDeep(state);
        const cartItem = find(state, product);
        if (cartItem) {
            cartItem.quantity++;
        }
        else {
            state.cartItems.push(buildCartRecord(product, 1));
        }
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    decrementCartProduct(
        state: Cart,
        product: Product): void {
        const cartBefore = _.cloneDeep(state);

        const cartItem = find(state, product);

        if (cartItem && cartItem.quantity > 0) {
            cartItem.quantity--;
            if (cartItem.quantity === 0) {
                _.remove(state.cartItems, q(product));
            }
        }
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    setPhonePrefix: (
        state: Cart,
        phonePrefix: string): void => {
        const cartBefore = _.cloneDeep(state);
        state.phonePrefix = phonePrefix;
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    setPhoneNumber: (
        state: Cart,
        phoneNumber: string): void => {
        const cartBefore = _.cloneDeep(state);
        state.phoneNumber = phoneNumber;
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
    setComment: (
        state: Cart,
        comment: string): void => {
        const cartBefore = _.cloneDeep(state);
        state.comment = comment;
        const cartAfter = _.cloneDeep(state);
        cartHandler.onCartChanged(cartBefore, cartAfter);
    },
}
export const getters = {
    getInternationalPhoneNumber: (state: Cart) => (): string => {
        return `+972${state.phonePrefix.slice(1)}${state.phoneNumber}`
    },
    getPhonePrefix: (state: Cart) => (): string => {
        return state.phonePrefix;
    },
    getPhoneNumber: (state: Cart) => (): string => {
        return state.phoneNumber;
    },
    getComment: (state: Cart) => (): string => {
        return state.comment;
    },
    getCartItemQuantity: (state: Cart) => (product: Product): number =>
        find(state, product)?.quantity || 0,
    getCartItemsCount: (state: Cart) => (): number => {
        let c = 0;
        state.cartItems.forEach(ci => c = c + ci.quantity);
        return c;
    },
    getCart: (state: Cart) => (): Cart => state,
    getCartTotal: (state: Cart) => (): number => {
        let total = 0
        state.cartItems.forEach(
            (ci) => (total += ci.quantity * ci.product.price)
        )
        return total
    },
}