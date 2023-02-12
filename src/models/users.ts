export interface User {
    _id: string,
    username: string,
    name: string,
    email: string,
    password: string,
    avatar: string,
    totalFollowers: number,
    totalFollowing: number,
}

export interface Credentials {
    username: string;
    password: string;
}


export interface Register {
    username: string;
    email: string;
    password: string;
}