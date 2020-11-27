export interface User {
    uid: string | undefined;
    displayName: string | undefined;
    email: string | undefined;
    emailVerified: boolean;
    claims: any | undefined
    token: string | undefined;
    isAnonymous: boolean;
};

