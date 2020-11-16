import { User } from "~/domain/identityModels";

export const state = (): User | undefined => undefined;

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state: any, authUser: User) => {
        console.log(authUser)
        if (authUser.claims) {
            console.log("set user claims");
            const { uid, email, emailVerified } = authUser;
            state.user = { uid, email, emailVerified }
        }
        else {
            console.log("set user as undefined");
            state.user = undefined;
        }
    },
}