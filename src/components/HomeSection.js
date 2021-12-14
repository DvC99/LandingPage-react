import React from 'react';
import {Button} from './Button';
import '../App.css';
import './HomeSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeSection(){
    return  (
        <div className="home-container">
             <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Cafe reposado</h1>
            <p>¿Que mejor lugar para tomar un cafe?</p>
            <div className="home-btns">
                <Button className="btns" buttonStyle="btn--outline" buttunSize="btn--large">
                    Tomate un cafe
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttunSize="btn--large">
                    Menu <FontAwesomeIcon className="fa-circle" icon="circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HomeSection;