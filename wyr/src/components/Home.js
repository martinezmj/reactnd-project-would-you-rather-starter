import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount() {
        // this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <h2>Home</h2>
        )
    }
}

function mapStateToProps ({  }) {
    return {}
}

export default connect(mapStateToProps)(Home)