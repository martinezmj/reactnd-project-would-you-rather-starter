import React, {Component} from 'react'
import {connect} from 'react-redux'

class User extends Component {

    render() {
        const asked = this.props.user.questions.length;
        const answered = Object.keys(this.props.user.answers).length;

        return (
            <div style={{border: "2px black solid", background: "#ddd", margin: "14px 25px", padding: "8px"}}>
                <div style={{float: "right"}}>
                    <img src={this.props.user.avatarURL} alt="avatar" style={{width: "50px", height: "50px"}}/>
                </div>
                <h2>{this.props.user.name}:</h2>
                <h3>
                    Asked: {asked}
                    &nbsp; &nbsp;
                    Answered: {answered}
                    &nbsp; &nbsp;
                    Total: {asked + answered}
                </h3>
            </div>
        )
    }
}

function mapStateToProps({users}, props) {
    return {
        user: users[props.id],
    }
}

export default connect(mapStateToProps)(User)