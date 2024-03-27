import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSidebar = ({ setCategory }) => {
    
    // TODO: fetch from api endpoint all categories
    const categories = ['Все категории', 'Owasp Top 10'];
    return (
        <div className="left-sidebar">
            <h3>Фильтр категорий</h3>
            <ul>
                {categories.map((category, index) => (
                <Link to={`vulnerability/${index}`}>
                <li onClick={() => setCategory(index)} key={index}>{category}</li>
                </Link>
                ))}
            </ul>
        </div>
    );
    
}

export default LeftSidebar;