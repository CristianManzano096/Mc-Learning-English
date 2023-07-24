import { ChangeEvent, useState } from 'react';

interface FormState{
    [key: string]:string;
}

interface UseForm{
    formState: FormState;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onResetForm: () => void;
}



export const useForm = ( initialForm:FormState =  {} ): UseForm => {
  
    const [ formState, setFormState ] = useState<FormState>( initialForm );

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}