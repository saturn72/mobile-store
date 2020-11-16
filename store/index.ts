import { Product } from "~/domain/models";
import createPersistedState from "vuex-persistedstate";

export const plugins = [createPersistedState];

export default {
    actions: {
        // Store action called nuxtServerInit:
        async nuxtServerInit({ dispatch, commit }: any, { res }: any) {
            if (res && res.locals && res.locals.user) {
                const { allClaims: claims, idToken: token, ...authUser } = res.locals.user

                await dispatch('onAuthStateChangedAction', {
                    authUser,
                    claims,
                    token
                })

                // or

                commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
            }
        },
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
        async onAuthStateChangedAction({ commit, dispatch }: any, { authUser, claims }: any) {
            if (!authUser) {
                await dispatch('cleanupAction')
                return
            }

            // you can request additional fields if they are optional (e.g. photoURL)
            const { uid, email, emailVerified, displayName, photoURL } = authUser

            commit('SET_USER', {
                uid,
                email,
                emailVerified,
                displayName,
                photoURL, // results in photoURL being undefined for server auth
                // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
                isAdmin: claims.custom_claim
            })
        }
    }
};