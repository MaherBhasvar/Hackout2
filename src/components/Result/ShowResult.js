import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowResult extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">

            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
})

export default connect(mapStateToProps, {})(ShowResult)