export interface User {
    _id: number,
    username: string,
    name: string,
    email: string,
    password: string,
    avatar: string,
    followers: number,
    following: number,
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