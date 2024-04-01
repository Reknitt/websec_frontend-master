import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import '../styles/LeftSidebar.css'
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleSettingCategory = (category) => {
        setSelectedCategory(category);
        console.log(category)
    }

    return (
        <Container className=''>
            <LeftSidebar 
                setCategory={handleSettingCategory}
            />

            <div>
                {selectedCategory 
                ? 
                <div>
                    {selectedCategory}
                </div> 
                : 
                <div>
                    select category
                </div>}
            </div>
        </Container>
    );
    
}

export default LearnPage;