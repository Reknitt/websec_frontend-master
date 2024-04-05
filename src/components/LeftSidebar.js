import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = ({ setCategory, vulnerabilities }) => {
    
    // TODO: fetch from api endpoint all categories
    
    return (
        <div className="left-sidebar">
            <h3>Фильтр категорий</h3>
            <ul>
                {vulnerabilities.map((vulnerability, index) => (
                
                    <li onClick={() => setCategory(index)} key={index}>{vulnerability.category}</li>
                
                ))}
            </ul>
        </div>
    );
    
}

export default LeftSidebar;