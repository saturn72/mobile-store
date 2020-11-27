import { Product } from "~/domain/models";
import createPersistedState from "vuex-persistedstate";
import firebase from "firebase";

export const plugins = [createPersistedState];

export default {
    actions: {
        // Store action called nuxtServerInit:
        async nuxtServerInit({ commit }: any, { res }: any) {
            if (res && res.locals && res.locals.user) {
                const u = {
                    ...res.locals.user
                }
                commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', u);
            }
        },
        //auth
        async onAuthStateChangedAction({ commit }: any, { authUser, claims }: any) {
            if (!authUser) {
                await firebase.auth().signInAnonymously();
            }
            else {
                const u = {
                    ...authUser, claims: claims,
                }
                commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', u);
            }

            if (!claims || !claims['phone_number']) {
                return;
            }
            let phone: string = claims['phone_number'];
            phone = phone.replaceAll('-', '').replaceAll('+', '').replaceAll('972', '');
            if (!phone.startsWith('0')) {
                phone = `0${phone}`;
            }

            const phonePrefix = phone.substring(0, 3)
            commit("cart/setPhonePrefix", phonePrefix)
            const phoneNumber = phone.substring(3)
            commit("cart/setPhoneNumber", phoneNumber)
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