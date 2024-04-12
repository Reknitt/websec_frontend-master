import { useState } from "react";
import { generate } from "shortid";
import { produce } from "immer";
import { Button } from 'react-bootstrap'


const AttackForm = ({onChange}) => {
    //const [attacks, setAttacks] = useState([{}]);
    /*const [stepsOfAttack, setSteps] = useState([
        {id: '0', text: '', code: ''}
    ]); */

    const [stepsOfAttack, setSteps] = useState([]);
    

    const TextHandleChange = (text, index) => {
        setSteps(currentStep =>  
            produce(currentStep, (v) => {
                v[index].text = text;
            })
        )
    }

    const CodeHandleChange = (code, index) => {
        setSteps(currentStep =>  
            produce(currentStep, (v) => {
                v[index].code = code;
            })
        )
    }

    const handleAddField = () => {
        setSteps(currentStep => [...currentStep, {id: '', text: '', code: ''}])
    };

    const handleRemoveField = index => {
        setSteps(currentObject => currentObject.filter(x => x.id !== index));
    };

    const handleSaveAttacks = () => {
        onChange(stepsOfAttack);
    };

    return (
        <div className="mb-3">
            <label className="form-label">Attacks:</label>
            {stepsOfAttack.map((element, index) => (
                <div key={index} className='mb-3'>
                    Text:
                    <input
                        className="form-control"
                        type="text"
                        value={element.text}
                        name={element.id}
                        onChange={e => TextHandleChange(e.target.value, index)}
                    />
                    Code:
                    <textarea
                        className="form-control"
                        type="code"
                        value={element.code}
                        name={element.id}
                        onChange={e => CodeHandleChange(e.target.value, index)}
                    />

                    <Button  type="button" onClick={() => handleRemoveField(element.id)}>
                        Remove
                    </Button>
                </div>
            ))}

            <Button type="button" onClick={handleAddField}>
                Add Attack
            </Button>

            <Button type="button" onClick={handleSaveAttacks}>
                Save Attacks
            </Button>
        </div>
    );
}

export default AttackForm;