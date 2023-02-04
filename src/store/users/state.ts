import { User } from "@/models/users";

export interface IUserState {
    users: User[],
    selectedUser: User | null
}

function state(): IUserState {
    return {
        users: [],
        selectedUser: null
    }
}


export default state