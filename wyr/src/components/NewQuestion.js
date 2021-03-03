import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class NewQuestion extends Component {

    componentDidMount() {
        // this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        New Q
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({  }) {
    return {}
}

export default connect(mapStateToProps)(NewQuestion)