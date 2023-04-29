import React from 'react';
import '../css/Card.css';

const Card = (props) => {
    const {name, email, id} = props.data;
    return (
        <div className = 'card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 text-color-blue'>
            <img alt='robots'  src={`https://robohash.org/${id}?400x400`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;