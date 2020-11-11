import { Product } from "~/domain/models";
import createPersistedState from "vuex-persistedstate";

export const plugins = [createPersistedState];

export default {
    actions: {
        incrementCartItem(ctx: any, product: Product) {
            ctx.commit("cart/incrementCartProduct", product)
        },
        decrementCartItem(ctx: any, product: Product) {
            ctx.commit("cart/decrementCartProduct", product)
        },
        setPhonePrefix(ctx: any, phonePrefix: string) {
            ctx.commit("cart/setPhonePrefix", phonePrefix)
        },
        setPhoneNumber(ctx: any, phoneNumber: string) {
            ctx.commit("cart/setPhoneNumber", phoneNumber)
        },
        setComment(ctx: any, comment: string) {
            ctx.commit("cart/setComment", comment)
        },
        clearCart(ctx: any) {
            ctx.commit("cart/clearCart")
        },
    }
};