import { useState } from "react";
import TextForm from "../common/TextForm";
import TextAreaForm from "../common/TextAreaForm";
import ListForm from "../common/ListForm";


const CreateVulnPage = () => {
    
      const [category, setCategory]                 = useState('');
      const [title, setTitle]                       = useState('');
      const [overview, setOverview]                 = useState('');
      const [description, setDescription]           = useState('');
      const [howToPrevent, setHowToPrevent]         = useState('');
      const [attacks, setAttacks]                   = useState([]);
      const [references, setReferences]             = useState([]);
      const [listOfMappedCWEs, setListOfMappedCWEs] = useState([]);
      const [practice, setPractice]                 = useState('');

      const handleCategoryChange = (e) => {
        setCategory(e.target.value);
      }

      const handleTitleChange = (e) => {
        setTitle(e.target.value);
      }

      const handleOverviewChange = (e) => {
        setOverview(e.target.value);
      }

      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      }

      const handleHowToPreventChange = (e) => {
        setHowToPrevent(e.target.value);
      }

      const handleAttacksChange = (e) => {
        setAttacks([...attacks, e.target.value]);
      }

      const handleReferencesChange = (value) => {
        setReferences([...references, value]);
      }

      const handleListOfMappedCWEsChange = (e) => {
        setListOfMappedCWEs([...listOfMappedCWEs, e.target.value]);
      }

      const handlePracticeChange = (e) => {
        setPractice(e.target.value);
      }
    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const vulnerability = {category, title, overview};
        console.log(vulnerability);
        console.log(e.target.value)
        // Here you can submit the form data to your backend or handle it as needed
      };
    
      
      return (
        <div className="container">
          <h1>Create Vulnerability</h1>
          <form onSubmit={handleSubmit}>
            
            <TextForm name="Category" handleChange={handleCategoryChange} required={true} />
            <TextForm name="Title" handleChange={handleTitleChange} required={true} />

            <TextAreaForm name="Overview" handleChange={handleOverviewChange} required={false} />
            <TextAreaForm name="Description" handleChange={handleDescriptionChange} required={false} />
            <TextAreaForm name="HowToPrevent" handleChange={handleHowToPreventChange} required={false} />
            
            {/*<ListForm name="Attacks" values={attacks} onChange={handleAttacksChange}>Attacks: </ListForm>*/}
            <ListForm name="References" values={references} onChange={handleReferencesChange} />
            
            
            {/* You can add more fields for Attacks, References, ListOfMappedCWEs, and Practice */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
}

export default CreateVulnPage;