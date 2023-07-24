
export interface VerbInterface{
    id: number,
    wordEs:string,
    wordEn:string,
    conjugations: {
        pastSimple : string,
        PastParticiple : string,
    },
    regular: boolean
}