import { User } from "~/domain/identityModels";

export const state = (): User | undefined => undefined;

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state: any, authUser: User) => {
        if (authUser && authUser.claims) {
            const u = {
                ...authUser.claims
            };
            state.user = u
        }
        else {
            state.user = undefined;
        }
    },
}