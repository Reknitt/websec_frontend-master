import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import '../styles/LeftSidebar.css'
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const [vulnerabilities, setVulnerabilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await fetch('https://localhost:7019/api/Vulnerability/All');
                if (!responce.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await responce.json();
                setVulnerabilities(data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }   
        }
        fetchData();
    }, []);

    const handleSettingCategory = (category) => {
        setSelectedCategory(category);
        console.log(category)
    }

    return (
        <Container className=''>
            <LeftSidebar 
                setCategory={handleSettingCategory} vulnerabilities={vulnerabilities} 
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
            <div>
                {vulnerabilities.map((item, index) => (
                    <div key={index}>{item.overview}</div>
                ))}
            </div>
        </Container>
    );
    
}

export default LearnPage;