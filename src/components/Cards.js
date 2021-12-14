import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards (){
    return(
        <div className="cards">
            <h1>Mira nuestros mejores Caffes</h1>
            <div clasname="cards__containres">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/img-9.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                        <CardItem 
                            src="/images/img-2.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/img-1.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                        <CardItem 
                            src="/images/img-3.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                        <CardItem 
                            src="/images/img-4.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                        <CardItem 
                            src="/images/img-5.jpg"
                            text="El mejor cafe para tomar un buen desacanso"
                            label="Descanso"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;