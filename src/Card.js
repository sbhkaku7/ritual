import React from "react";
import "./Card.css"
const Card =(props)=>{
    return(
        <div className="card-container" style={{backgroundImage:`url(${props.bg})`}}>
                {props.offer&&<div className="offer">{props.offer} </div>}
                <div className="card-style">{props.name}
            </div>
        </div>
    )

}

export default Card;