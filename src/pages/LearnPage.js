import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import '../styles/LeftSidebar.css'
import { useNavigate } from "react-router-dom";
import VulnerabilityDetails from "../components/VulnerabilityDetails";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const LearnPage = () => {
    
    const [selectedVulnerability, setSelectedVulnerability] = useState(null);
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
        setSelectedVulnerability(vulnerabilities[category]);
        console.log(JSON.stringify(vulnerabilities[category]))
    }

    return (
        <Container className='page-layout'>
            <LeftSide>
                <LeftSidebar 
                    setCategory={handleSettingCategory} vulnerabilities={vulnerabilities} 
                />
            </LeftSide>

            <RightSide>
                <div>
                    {selectedVulnerability 
                    ? 
                    <div>
                        <VulnerabilityDetails data={selectedVulnerability} />
                    </div> 
                    : 
                    <div>
                        select category
                    </div>}
                </div>
            </RightSide>
        </Container>
    );
    
}

export default LearnPage;