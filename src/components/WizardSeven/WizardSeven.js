import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateDownPayment } from '../../ducks/reducer'

class WizardSeven extends Component {

    render(){
        const { updateDownPayment } = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => updateDownPayment( e.target.value )}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateDownPayment( e.target.value )}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateDownPayment( e.target.value )}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateDownPayment( e.target.value )}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { downPayment } = state 

    return {
        downPayment
    }
}
export default connect(mapStateToProps, { updateDownPayment })(WizardSeven);