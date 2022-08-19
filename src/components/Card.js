import React from "react";


const Card = ({name, id, email}) =>{
    return(
        <div className="card tc">
            <div className="image">
                <img src={`images/${id}`} alt=""></img>
            </div>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 