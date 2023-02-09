import { User } from "@/models/users";

export interface IUserState {
    user: User | null
    token: string | null
    kudos: string[]
}


function state(): IUserState {
    return {
        user: null,
        token: null,
        kudos: []
    }
}

export default state