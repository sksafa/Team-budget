import React from 'react';
import './PlayerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const PlayerList = (props) => {
    const { name, age, salary, image, role } = props.playerInfo;
    //const {HandelPlayer } = props.HandelPlayer;
    return (
        <div className="playerList">
            <img src={image} alt="" />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
            <p>Salary: ${salary}</p>
            <button onClick = {()=> props.HandelPlayer(props.playerInfo)} > <FontAwesomeIcon icon={faPaperPlane} /> Add To  Team</button>
        </div>
    );
};

export default PlayerList;