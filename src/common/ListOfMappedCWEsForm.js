import { useState } from "react";
import { generate } from "shortid";
import { produce } from "immer";
import { Button } from 'react-bootstrap'


const ListOfMappedCWEsForm = ({onChange}) => {
    const [cwes, setCwes] = useState([]);
    

    const handleChange = (value, index) => {
        setCwes(currentCwe =>  
            produce(currentCwe, (v) => {
                v[index] = value;
            })
        )
    }

    const handleAddField = () => {
        setCwes(currentObject => [...currentObject, ''])
    };

    const handleRemoveField = index => {
        setCwes(currentObject => currentObject.filter(x => x.id !== index));
    };

    const handleSaveCwes = () => {
        onChange(cwes);
    };

    return (
        <div className="mb-3">
            <label className="form-label">CWEs:</label>
            {cwes.map((element, index) => (
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
                Add CWE
            </Button>

            <Button type="button" onClick={handleSaveCwes}>
                Save CWEs
            </Button>
        </div>
    );
}

export default ListOfMappedCWEsForm;