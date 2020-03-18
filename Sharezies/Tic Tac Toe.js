import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
    display: 'flex'
}

const squareStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white',
    'cursor': 'pointer'
}

const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}

const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
}

const Square = ({name, value, onClick}) => {


    return (
        <div
            className="square"
            style={squareStyle}
            onClick={onClick}
        >
            {value ? value: null}
        </div>
    );
}

const Board = () => {

    const [currentPlayer, setCurrentPlayer] = React.useState('X');
    const [winner, setWinner] = React.useState('');


    const [gameState, setGameState] = React.useState({
        square1: "",
        square2: "",
        square3: "",
        square4: "",
        square5: "",
        square6: "",
        square7: "",
        square8: "",
        square9: "",
    })

    React.useEffect(() => {
        checkWinner();
    }, [gameState]);

    React.useEffect(() => {
        console.log(winner);
    }, [winner]);

    const handleSquareChange = (id) => {
        setGameState({...gameState, [id]: currentPlayer});
        if(currentPlayer === "X"){
            setCurrentPlayer("O");
        }else {
            setCurrentPlayer("X");
        }
    }

    const handleReset = () => {
        setGameState({
            square1: "",
            square2: "",
            square3: "",
            square4: "",
            square5: "",
            square6: "",
            square7: "",
            square8: "",
            square9: "",
        });
        setCurrentPlayer('X');
        setWinner('');
    }

    const checkWinner = () => {
        if(gameState.square1 === gameState.square2 && gameState.square2 === gameState.square3){
            setWinner(gameState.square1);
            console.log("winner is", gameState.square1);
        }
        if(gameState.square4 === gameState.square5 && gameState.square5 === gameState.square6){
            setWinner(gameState.square4);
            console.log("winner is", gameState.square4);
        }
        if(gameState.square7 === gameState.square8 && gameState.square8 === gameState.square9){
            setWinner(gameState.square7);
            console.log("winner is", gameState.square7);
        }
        if(gameState.square1 === gameState.square4 && gameState.square4 === gameState.square7){
            setWinner(gameState.square1);
            console.log("winner is", gameState.square1);

        }
        if(gameState.square2 === gameState.square5 && gameState.square5 === gameState.square8){
            setWinner(gameState.square2);
            console.log("winner is", gameState.square2);

        }
        if(gameState.square3 === gameState.square6 && gameState.square6 === gameState.square9){
            setWinner(gameState.square3);
            console.log("winner is", gameState.square3);

        }
        if(gameState.square1 === gameState.square5 && gameState.square5 === gameState.square9){
            setWinner(gameState.square1);
            console.log("winner is", gameState.square1);

        }
        if(gameState.square3 === gameState.square5 && gameState.square5 === gameState.square7){
            setWinner(gameState.square3);
            console.log("winner is", gameState.square3);

        }
    }

    return (
        <div style={containerStyle} className="gameBoard">
            <div className="status" style={instructionsStyle}>Next player: {currentPlayer}</div>
            <div className="winner" style={instructionsStyle}>Winner: {winner.length > 0?winner:"None"}</div>
            <button style={buttonStyle} onClick={() => handleReset()}>Reset</button>
            <div style={boardStyle}>
                <div className="board-row" style={rowStyle}>
                    <Square value={gameState.square1} onClick={() => handleSquareChange("square1")}/>
                    <Square value={gameState.square2} onClick={() => handleSquareChange("square2")}/>
                    <Square value={gameState.square3} onClick={() => handleSquareChange("square3")}/>
                </div>
                <div className="board-row" style={rowStyle}>
                    <Square value={gameState.square4} onClick={() => handleSquareChange("square4")}/>
                    <Square value={gameState.square5} onClick={() => handleSquareChange("square5")}/>
                    <Square value={gameState.square6} onClick={() => handleSquareChange("square6")}/>
                </div>
                <div className="board-row" style={rowStyle}>
                    <Square value={gameState.square7} onClick={() => handleSquareChange("square7")}/>
                    <Square value={gameState.square8} onClick={() => handleSquareChange("square8")}/>
                    <Square value={gameState.square9} onClick={() => handleSquareChange("square9")}/>
                </div>
            </div>
        </div>
    );
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);