import React from 'react'

function ScoreBoard(props) {
    return (
        <div className='ScoreBoard'>
            <h3>---|Score Board|---</h3>
            
            <div className='teamStats'>
                <h2> visiting Team </h2>
                <h2>{props.visitingTeamStats.score}</h2>
            </div>

            <div className='teamStats'>
                <h2> Home Team </h2>
                <h2>{props.homeTeamStats.score}</h2>
                
            </div>
        </div>
    )
}

export default ScoreBoard