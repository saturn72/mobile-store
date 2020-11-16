import { User } from "~/domain/identityModels";

export const state = (): User => ({ uid: undefined, displayName: undefined, email: undefined, emailVerified: false, claims: undefined })

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state: any, a: { authUser: User, claims: any }) => {
        //     if (!authUser) {
        //         // claims = null
        //         // perform logout operations
        //     } else {
        //         // Do something with the authUser and the claims object...
        //     }
        // }

        // ON_AUTH_STATE_CHANGED_MUTATION(state: any): void {
        const { uid, email, emailVerified } = a.authUser
        state.user = { uid, email, emailVerified }

        // const u: User = a.authUser;
        // state.user = u

        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");
        console.log("ON_AUTH_STATE_CHANGED_MUTATION");

        // ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        //     // you can request additional fields if they are optional (e.g. photoURL)
        //     const { uid, email, emailVerified, displayName, photoURL } = authUser

        //     state.authUser = {
        //       uid,
        //       displayName,
        //       email,
        //       emailVerified,
        //       photoURL: photoURL || null, // results in photoURL being null for server auth
        //       // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
        //       isAdmin: claims.custom_claim
        //     }
        //   }
    },
}