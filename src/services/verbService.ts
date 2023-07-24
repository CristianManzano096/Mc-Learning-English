import { VerbInterface } from "../interfaces";


export const validateAnswer = (verb:VerbInterface, answer:string):boolean => {
    console.log([verb,answer]);
    console.log(verb.wordEn === answer.trim().toLowerCase());
    return verb.wordEn === answer.trim().toLowerCase();
}