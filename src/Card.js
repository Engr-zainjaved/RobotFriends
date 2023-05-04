import React from 'react';


 
const Card = ({name, email, id}) =>{

    return(
        <div className='font-medium text-center bg-green-300 inline-block p-3 m-3 transform transition duration-500 hover:scale-105 rounded-lg shadow-lg'>
            <img src={`https://robohash.org/${id}?200x200" alt="robots`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;