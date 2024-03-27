import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import { Button, Container } from 'react-bootstrap';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';


const HomePage = () => {
    return (
        <Container className='page-layout'>
            <LeftSide>
                <p>WebSecProbe это платформа, которая обучает защите от различного рода уязвимостей, сейчас это web</p>
                    <Button>Войти</Button>
                    <Button className='ms-1'>Зарегистрироваться</Button>
            </LeftSide>

            <RightSide>
                <p>Что нового?</p>
            </RightSide>
        </Container>
    )
}

export default HomePage;