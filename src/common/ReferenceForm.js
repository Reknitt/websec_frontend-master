import { useState } from "react";
import { generate } from "shortid";
import { produce } from "immer";
import { Button } from 'react-bootstrap'

const ReferenceForm = ({onChange}) => {

    const [references, setReferences] = useState([]);
    

    const handleChange = (value, index) => {
        setReferences(currentReference =>  
            produce(currentReference, (v) => {
                v[index] = value;
            })
        )
    }

    const handleAddField = () => {
        setReferences(currentObject => [...currentObject, ''])
    };

    const handleRemoveField = index => {
        setReferences(currentObject => currentObject.filter(x => x.id !== index));
    };

    const handleSaveReferences = () => {
        onChange(references);
    };

    return (
        <div className="mb-3">
            <label className="form-label">References:</label>
            {references.map((element, index) => (
                <div key={index} className='mb-3'>
                    {index}
                    <input
                        className="form-control"
                        type="text"
                        value={element.value}
                        name={element.id}
                        onChange={e => handleChange(e.target.value, index)}
                    />

                    <Button  type="button" onClick={() => handleRemoveField(element.id)}>
                        Remove
                    </Button>
                </div>
            ))}

            <Button type="button" onClick={handleAddField}>
                Add Reference
            </Button>

            <Button type="button" onClick={handleSaveReferences}>
                Save references
            </Button>
        </div>
    );
}

export default ReferenceForm;