import React from "react";
import Card from "./Card";

const CardList = ({data}) =>{
    return(
        <div className="flex">
            {
                data.map((user, i) =>{
                    return(
                        <Card
                            key={i}
                            id = {data[i].id}
                            name = {data[i].name}
                            email = {data[i].email} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;