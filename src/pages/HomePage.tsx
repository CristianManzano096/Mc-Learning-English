import { useForm } from "../hooks";
import { validateAnswer } from "../services";


const attack = {
    id: 12,
    wordEs: 'atacar',
    wordEn: 'attack',
    conjugations: {
        pastSimple : 'attacked',
        PastParticiple : 'attacked',
    },
    regular: true
}


export const HomePage = () => {

    const { formState, onInputChange, onResetForm } = useForm({answer:''});

    const { answer } = formState;

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        const response:boolean = validateAnswer(attack,answer);

        console.log('Respuesta: ' + (response?'Correcta':'Incorrecta'));
        onResetForm();

    }

  return (
    <>
        <div>
            <h1>Selecciona los verbos que quieras aprender</h1>

            <h4>Attack</h4>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="answer"> Answer </label>
                <input 
                    type="text"  
                    name="answer" 
                    id="answer" 
                    value={answer} 
                    onChange={onInputChange}/>

                <button type="submit"> Send </button>
                <button type="button" onClick={onResetForm}> Reset </button>
                    
            </form>

        </div>

    </>
  )
}
