import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = ({ setCategory }) => {
    
    // TODO: fetch from api endpoint all categories
    const categories = ['Все категории', 'Owasp Top 10', 'crypto'];
    return (
        <div className="left-sidebar">
            <h3>Фильтр категорий</h3>
            <ul>
                {categories.map((category, index) => (
                
                    <li onClick={() => setCategory(index)} key={index}>{category}</li>
                
                ))}
            </ul>
        </div>
    );
    
}

export default LeftSidebar;