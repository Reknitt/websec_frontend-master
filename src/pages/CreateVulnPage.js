import { useState } from "react";


const CreateVulnPage = () => {
    const [formData, setFormData] = useState({
        Category: '',
        Title: '',
        Overview: '',
        Description: '',
        HowToPrevent: '',
        Attacks: [],
        References: [],
        ListOfMappedCWEs: [],
        Practice: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the form data to your backend or handle it as needed
        console.log(formData);
      };
    
      return (
        <div className="container">
          <h1>Create Vulnerability</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Category:</label>
              <input type="text" className="form-control" name="Category" value={formData.Category} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input type="text" className="form-control" name="Title" value={formData.Title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Overview:</label>
              <textarea className="form-control" name="Overview" value={formData.Overview} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea className="form-control" name="Description" value={formData.Description} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">How to Prevent:</label>
              <textarea className="form-control" name="HowToPrevent" value={formData.HowToPrevent} onChange={handleChange} />
            </div>
            {/* You can add more fields for Attacks, References, ListOfMappedCWEs, and Practice */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
}

export default CreateVulnPage;