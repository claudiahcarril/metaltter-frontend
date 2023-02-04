import { User } from "./users";

export interface Met {
    _id: number,
    postedBy: User,
    image: string,
    message: string,
    kudos: number,
    dateCreated: Date,
}