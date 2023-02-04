import { Met } from "@/models/mets";

export interface IMetState {
    mets: Met[]
    isLoading: boolean
    selectedMet: Met | null
}

export interface MetParams {
    page: number
    postedBy: string
}

function state(): IMetState {
    return {
        mets: [],
        isLoading: false,
        selectedMet: null
    }
}

export default state