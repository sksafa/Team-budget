import React from 'react';
import './teamInfo.css'

const SelectInfo = (props) => {
    const totalPlayer = props.playerCount;

    const formateNumber=(number)=>{
        return Number(number);
    }

    console.log(totalPlayer)
    let totalSalary = 0;
    for (let i = 0; i <totalPlayer.length; i++) {
        const element = totalPlayer[i];
        totalSalary = totalSalary+formateNumber(element.salary);
        
    }


    return (
        <div className="selectInfo">
            <h2 className="borderBottom">Team Info</h2>
            <div className="selectCart">
             <p>Team Member: {totalPlayer.length}</p>
             <table>
                 <tr>
                    <th>Player Name</th>
                    <th>Player Salary</th>
                 </tr>

                 
                 {
                     totalPlayer.map(name =><tr><td>{name.name}</td> <td>${name.salary}</td> </tr> )}{
                    
                 }   

                 <tr>
                     <td> <p className="textBlack">Team Budget</p></td>
                      <td> <p className="textBlack"> ${totalSalary}</p></td>
                 </tr>

             </table>
            </div>
        </div>
    );
};

export default SelectInfo;