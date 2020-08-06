import React from 'react'

class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
       
    }
    

render () {
    let shotPercentageDiv
    let shotPercentage = 0
    if (this.props.stats.shots) {
        shotPercentage = Math.round((this.props.stats.shots / this.props.stats.score) * 100)

        shotPercentageDiv = (
            <div>
                <p>Shoot %: {shotPercentage}</p>
            </div>
        )

    }
    return (
        <div className='Team'>
            <h1>{this.props.teamName}</h1>

            <div className='logo'>
                <img src={this.props.teamLogo} alt={this.props.teamName} />
            </div>
            <br />

            <div>
                
                    <strong>
                        <em>SHOTS : </em>{this.props.stats.shots}
                    </strong>
               
               
            </div>

            <br />

            <div>
                
                    <strong>
                        <em>SCORE : </em>{this.props.stats.score}
                    </strong>
               
               
            </div>

            <br />

            {shotPercentageDiv}

            <button onClick={this.props.shotHandler}><em>SHOOT!</em></button>
        </div>

        
    )
    
}
}

export default Team