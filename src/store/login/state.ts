import { User } from "@/models/users";

export interface IUserState {
    user: User | null
    token: string | null
}


function state(): IUserState {
    return {
        user: null,
        token: null
    }
}

export default state