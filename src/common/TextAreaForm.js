

const TextAreaForm = ({name, handleChange, required}) => {
    return (
        <div className="mb-3">
            <label className="form-label">{name}:</label>
            <textarea 
                className="form-control" 
                name={name} 
                onChange={handleChange} 
                {...(required && {required: 'required'})} 
            />
        </div>
    );
}

export default TextAreaForm;