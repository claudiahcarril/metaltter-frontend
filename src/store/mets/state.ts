import { Met } from "@/models/mets";

export interface IMetState {
    mets: Met[]
    isLoading: boolean
    selectedMet: Met | null
    metsPostedByUser: Met[]
}

export interface MetParams {
    page: number
    limit: number
    word?: string
}

function state(): IMetState {
    return {
        mets: [],
        isLoading: false,
        selectedMet: null,
        metsPostedByUser: []
    }
}

export default state