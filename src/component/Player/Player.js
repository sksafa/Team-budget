
import React ,{useState,useEffect}from 'react';
import PlayerList from '../PlayerList/PlayerList';
import './Player.css'
import data from '../../Data.json'

const Player = () => {
    const [player,setPlayer] = useState([])
    
    useEffect(() => {
        setPlayer(data)
    }, [])

    return (
        <div className="mainInfo">
            <div className="playerInfo">
               {
                   player.map(playerInfo => <PlayerList playerInfo={playerInfo} ></PlayerList>)
               }
            </div>
            <div className="playerSelectInfo"></div>
        </div>
    );
};

export default Player;