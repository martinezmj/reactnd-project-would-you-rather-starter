import React, {Fragment} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {logoutAuthedUser} from "../actions/authedUser";

function logout(props) {
    props.dispatch(logoutAuthedUser())
}

function Nav(props) {

    return (
        <nav className="nav">
            <ul>
                {
                    props.user
                        ? (
                            <Fragment>
                                <li>
                                    <NavLink to="/" exact={true} activeClassName="active">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add" activeClassName="active">
                                        New Question
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/leaderboard" activeClassName="active">
                                        Leader Board
                                    </NavLink>
                                </li>
                                <li style={{margin: "0 auto"}}>
                                    Hello {props.user.name}
                                </li>
                                <li style={{marginLeft: "auto"}}>
                                    <NavLink onClick={() => logout(props)} to="/" exact={true} isActive={() => false}>
                                        Logout
                                    </NavLink>
                                </li>
                            </Fragment>
                        )
                        : null
                }
            </ul>
        </nav>
    )
}

export default connect()(Nav)