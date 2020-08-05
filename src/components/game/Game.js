import React, { Component } from 'react'
import Team from '../team/Team'

import Scoreboard from '../scoreboard/Scoreboard'
import shotSound from '../../assets/sound/FOOTBALLKICK.mp3'
import scoreSound from '../../assets/sound/cheers.mp3'


class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount: 0,
            
            homeTeamStats: {
                shots: 0,
                score: 0

            },
            visitingTeamStats: {
                shots: 0,
                score: 0

            }
        }

        this.shotSound = new Audio(shotSound)
        this.scoreSound = new Audio(scoreSound)
    }

    shoot = (team) => {
        const teamStatsKey = '${team}TeamStats'
        let score = this.state[teamStatsKey].score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            },100)
        }

        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1, 
                score: score,
            }
        }))
    }

    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            homeTeamStats: {
                shots: 0,
                score: 0,
            },

            visitingTeamStats: {
                shots: 0,
                score: 0,
            }
        }))
    }
    
    render() {
        return (
            <div className='Game'>
                <h1>Welcome to {this.props.venue}</h1>
                <Scoreboard
                homeTeamStats={this.state.homeTeamStats}
                visitingTeamStats={this.state.visitingTeamStats}
                />
                    <div className='versus'>
                        <h2>V/S</h2>
                    </div>
                <div className='stats'>
                    <Team teamName={this.props.homeTeam}
                    teamLogo={this.props.homeTeam}
                    stats={this.state.homeTeamStats}
                    shotHandler={() => this.shotSound('home')}
                    />

                    <br />
                   
                    <br />

                    <button className='resetButton' onClick={this.resetGame}>Reset Game</button>

                    <Team teamName={this.props.visitingTeam}
                    teamLogo={this.props.visitingTeam}
                    stats={this.state.visitingTeamStats}
                    shotHandler={() => this.shotSound('visiting')}
                    />

                </div>
            </div>
        )
    }
}

export default Game