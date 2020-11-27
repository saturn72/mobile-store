import { User } from "~/domain/identityModels";

export const state = (): User | undefined => undefined;

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state: any, authUser: User) => {
        let u = undefined;
        if (authUser) {
            u = {
                ...authUser
            };
        }
        state.user = u
    },
}

export const getters = {
    isAnonymous: (state: any | undefined) => (): boolean => {
        return state?.user?.isAnonymous;
    }
}