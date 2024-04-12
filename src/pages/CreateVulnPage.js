import { useEffect, useState } from "react";
import TextForm from "../common/TextForm";
import TextAreaForm from "../common/TextAreaForm";
import ReferenceForm from "../common/ReferenceForm";
import AttackForm from "../common/AttackForm";
import ListOfMappedCWEsForm from "../common/ListOfMappedCWEsForm";


const CreateVulnPage = () => {
    
      const [category, setCategory]                 = useState('');
      const [title, setTitle]                       = useState('');
      const [overview, setOverview]                 = useState('');
      const [description, setDescription]           = useState('');
      const [howToPrevent, setHowToPrevent]         = useState('');
      const [attacks, setAttacks]                   = useState([]);
      const [references, setReferences]             = useState([]);
      const [listOfMappedCWEs, setListOfMappedCWEs] = useState([]);
      const [practice, setPractice]                 = useState();

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

      const handleAttacksChange = (stepsOfAttack) => {
        const newAttacks = [];
        stepsOfAttack.forEach((step, index) => {
          newAttacks.push({
            stepsOfAttack: 
            [
              {
                text: step.text,
                code: step.code
              }
            ]
          })
        })
        setAttacks(newAttacks);
      }

      const handleReferencesChange = (values) => {
        setReferences(values);
      }

      const handleListOfMappedCWEsChange = (values) => {
        setListOfMappedCWEs(values);
      }

      const handlePracticeChange = (e) => {
        setPractice({
          practice: e.target.value
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const vulnerability = 
        {
          category, 
          title, 
          overview,
          description,
          howToPrevent,
          attacks,
          references,
          listOfMappedCWEs,
          practice
        };
        console.log(vulnerability);

        const backendUrl = 'https://localhost:7019/api/Vulnerability';
        const requestOptions = 
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
              'accept': '*/*'
            },
          body: JSON.stringify(vulnerability) // Convert your data to JSON string
        }



        fetch(backendUrl, requestOptions)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json(); // Parse the JSON response
          })
          .then(data => {
              // Handle the JSON data returned by the server
              console.log(data);
          })
          .catch(error => {
              // Handle errors
              console.error('There was a problem with the POST request:', error);
          });
        
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
            
            <AttackForm onChange={handleAttacksChange} />
            <ReferenceForm onChange={handleReferencesChange} />
            <ListOfMappedCWEsForm onChange={handleListOfMappedCWEsChange} />

            <TextForm name="Practice" handleChange={handlePracticeChange} />
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
}

export default CreateVulnPage;