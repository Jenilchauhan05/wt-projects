import { useState } from "react";

export default function Board() {
    let [moves, setMoves] = useState({ blue:0, red:0, green:0, yellow:0 });
    
    let updateBlue = () => {
        setMoves({...moves, blue: moves.blue + 1});
    };
    
    let updateRed = () => {
        setMoves({...moves, red: moves.red + 1});
    };
    
    let updateGreen = () => {
        setMoves({...moves, green: moves.green + 1});
    };
    
    let updateYellow = () => {
        setMoves({...moves, yellow: moves.yellow + 1});
    };
    
    return (
        <div>
            <h1>Ludo Board</h1>
            <div className="board">
                <p>blue moves = {moves.blue} </p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>red moves = {moves.red} </p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
                <p>green moves = {moves.green} </p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p>yellow moves = {moves.yellow} </p>
                <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
}