import { User } from "@/models/users";

export interface IUserState {
    user: User | null
    token: string | null
    kudos: string[]
    follows: string[]
}


function state(): IUserState {
    return {
        user: null,
        token: null,
        kudos: [],
        follows: []
    }
}

export default state