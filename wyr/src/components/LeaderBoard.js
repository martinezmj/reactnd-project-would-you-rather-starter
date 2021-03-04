import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

    componentDidMount() {
        // this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <h2>Leader Board</h2>
        )
    }
}

function mapStateToProps ({  }) {
    return {}
}

export default connect(mapStateToProps)(LeaderBoard)