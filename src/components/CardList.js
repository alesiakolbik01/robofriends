import React from 'react';
import Card from './Card';


function CardList ({ robots }) {
    return (
        <>
            {
                robots.map(
                    robot => {
                        return <Card key={robot.id} data={robot}/>
                    } 
                )
            }
        </>
    )
}

export default CardList;