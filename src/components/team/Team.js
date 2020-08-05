import React from 'react'

class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('FOOTBALLKICK.mp3')
        this.scoreSound = new Audio('cheers.mps')
    }
    shotHandler = () => {
        let score = this.state.score
        this.scoreSound.play()

        if (Math.random() > 0.5) {
            score += 1
            this.scoreSound.play()
        }
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

render () {
    let shotPercentageDiv
    let shotPercentage = []
    if (this.state.shots) {
        shotPercentage = Math.round((this.state.shots / this.state.score) * 100)

        shotPercentageDiv = (
            <div>
                <p>Shoot %: {shotPercentage}</p>
            </div>
        )

    }
    return (
        <div className='Team'>
            <h1>{this.props.name}</h1>

            <div className='logo'>
                <img src={this.props.logo} alt={this.props.name} />
            </div>

            <div>
                
                    <strong>
                        <em>SHOTS : </em>{this.state.shots}
                    </strong>
               
               
            </div>

            <br />

            <div>
                
                    <strong>
                        <em>SCORE : </em>{this.state.score}
                    </strong>
               
               
            </div>

            <br />

            {shotPercentageDiv}

            <button onClick={this.shotHandler}><em>SHOOT!</em></button>
        </div>
    )
}
}

export default Team