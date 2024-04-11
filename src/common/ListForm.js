import { useState } from "react";
import { generate } from "shortid";
import { produce } from "immer";
import { Button } from 'react-bootstrap'
import TextAreaForm from "./TextAreaForm";
import TextForm from "./TextForm";

const ListForm = ({name, values, onChange, children}) => {

    const [list, setList] = useState([]);
    

    const handleChange = (value, index) => {
        setList(currentObject => 
        produce(currentObject, (v) => {
            v[index].value = value;
        }))
    }

    const handleAddField = () => {
        setList(currentObject => [...currentObject, {
            id: generate(),
            value: ''
        }])
    };

    const handleRemoveField = index => {
        setList(currentObject => currentObject.filter(x => x.id !== index));
    };

    const handleSaveFields = () => {

    };

    return (
        <div className="mb-3">
            <label className="form-label">{name}:</label>
            {list.map((element, index) => (
                <div key={index} className='mb-3'>
                    <input
                        className="form-control"
                        type="text"
                        value={element.value}
                        name={`${name}[${index}]`}
                        onChange={e => handleChange(e.target.value, index)}
                    />

                    <Button  type="button" onClick={() => handleRemoveField(element.id)}>
                        Remove
                    </Button>
                </div>
            ))}

            <Button type="button" onClick={handleAddField}>
                Add Field
            </Button>

            <Button type="button" onClick={handleSaveFields}>
                Save references
            </Button>
        </div>
    );
}

export default ListForm;