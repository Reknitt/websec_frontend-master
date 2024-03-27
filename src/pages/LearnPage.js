import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import '../styles/LeftSidebar.css'
import { Link, redirect } from "react-router-dom";

const LearnPage = () => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSettingCategory = (category) => {
        setSelectedCategory(category);
        console.log(category)
    }

    return (
        <Container className=''>
            <LeftSidebar 
                setCategory={handleSettingCategory}
            />
        </Container>
    );
    
}

export default LearnPage;