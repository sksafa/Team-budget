import React from 'react';
import './PlayerList.css'


const PlayerList = (props) => {
       console.log(props)

       const {name,age,salary,image,role} = props.playerInfo;


    return (
        <div className="playerList">
            <img src={image} alt=""/>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Role: {role}</p>
                <p>Salary: ${salary}</p>
                <button>Add player</button>
        </div>
    );
};

export default PlayerList;