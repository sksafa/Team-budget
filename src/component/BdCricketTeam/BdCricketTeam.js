
import React, { useState, useEffect } from 'react';
import PlayerList from '../PlayerList/PlayerList';
import './BdCricketTeam.css'
import data from '../../Data.json'
import TeamInfo from '../TeamInfo/TeamInfo';

const BdCricketTeam = () => {
    const [player, setPlayer] = useState([]);
    const [playerCount, setPlayerCount] = useState([]);

    useEffect(() => {
        setPlayer(data);
    }, []);

    const HandelPlayer = (playerInfo) => {
        let addPlayer = [...playerCount, playerInfo];
        setPlayerCount(addPlayer);
    }

    return (
        <div className="mainInfo">
            <div className="playerInfo">
                {
                    player.map(playerInfo => <PlayerList playerInfo={playerInfo} HandelPlayer={HandelPlayer} ></PlayerList>)
                }
            </div>
            <div className="playerSelectInfo">
                <TeamInfo playerCount={playerCount} ></TeamInfo>
            </div>
        </div>
    );
};

export default BdCricketTeam;