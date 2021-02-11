import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {

    const {heroeid} = useParams()
   
    const hero = useMemo(() => getHeroById( heroeid ), [heroeid])
     

    if (!hero) {
        return <Redirect to="/"/>
    }

    const {
        id, 
        superhero,
        publisher,
        alter_ego, 
        first_appearance, 
        characters 
    } = hero;

    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack()  
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeid}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Aparience:</b> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    return
                </button>   
            </div>
            
        </div>
    )
}