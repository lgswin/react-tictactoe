import React, { Component } from 'react'
import Square  from './Square'
import "./Board.css"

export default class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        squares[i] = 'X'
        this.setState({squares: squares})
    }
    
    renderSqure(i) {
        return <Square value={this.state.squares[i]} 
                onClick={ () => this.handleClick(i)} />
    }

    render() {
        return (
        <div>
            <div className='status'>Next player: X, O</div>
            <div className='board-row'>
                {this.renderSqure(0)}
                {this.renderSqure(1)}
                {this.renderSqure(2)}
            </div>
            <div className='board-row'>
                {this.renderSqure(3)}
                {this.renderSqure(4)}
                {this.renderSqure(5)}
            </div>
            <div className='board-row'>
                {this.renderSqure(6)}
                {this.renderSqure(7)}
                {this.renderSqure(8)}
            </div>
        </div>
        )
    }
}
