export interface User {
    uid: string | undefined;
    displayName: string | undefined;
    email: string | undefined;
    emailVerified: boolean;
    claims: string[] | undefined
};

