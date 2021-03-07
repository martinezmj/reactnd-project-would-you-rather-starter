import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

    componentDidMount() {
        // this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <h2>New Question</h2>
        )
    }
}

function mapStateToProps ({  }) {
    return {}
}

export default connect(mapStateToProps)(NewQuestion)