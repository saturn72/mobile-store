import { Product } from "~/domain/models";
import createPersistedState from "vuex-persistedstate";
import firebase from "firebase";

export const plugins = [createPersistedState];

export default {
    actions: {
        // Store action called nuxtServerInit:
        async nuxtServerInit({ commit }: any, { res }: any) {
            if (res && res.locals && res.locals.user) {
                const u = { ...res.locals.user }
                commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', u);
            }
        },
        //auth
        async onAuthStateChangedAction({ commit }: any, { authUser, claims }: any) {
            if (!authUser) {
                await firebase.auth().signInAnonymously();
                return
            }
            const u = { ...authUser, claims }
            commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', u);
        },
        //cart
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
        }
    }
};