import React, { Component, useState } from 'react'
import Square  from './Square'
import "./Board.css"

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

//    const status = `Next Player: ${xIsNext ? 'X' : 'O' }`
    
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }
    
    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        console.log(winner)
        status = 'Winner: ' + winner
    } else {
        console.log(winner)
        status = `Next Player: ${xIsNext? 'X' : 'O'}`
    }


    const handleClick = (i) => {
        const newSquares = squares.slice()
        if (calculateWinner(newSquares) || newSquares[i]) return
        newSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(prev => !prev)
    }
    
    const renderSqure= (i) => {
        return <Square value={squares[i]} 
                onClick={ () => handleClick(i)} />
    }

    return (
    <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
            {renderSqure(0)}
            {renderSqure(1)}
            {renderSqure(2)}
        </div>
        <div className='board-row'>
            {renderSqure(3)}
            {renderSqure(4)}
            {renderSqure(5)}
        </div>
        <div className='board-row'>
            {renderSqure(6)}
            {renderSqure(7)}
            {renderSqure(8)}
        </div>
    </div>
    )
    
}

export default Board