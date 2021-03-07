import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {

    render() {
        console.log("404");
        return (
            <h2>404 Not Found!</h2>
        )
    }
}

export default connect()(NotFound)