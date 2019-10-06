import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class SuccessBooking extends Component {

    state = {

    }

    render() {
        return (
            <div className="container">
                <h1>Your Booking is Successful</h1>
                <h4>Thank You For Choosing Us</h4>
                <Link to="/">Book Another Ticket</Link>
            </div>
        )
    }
}

export default withRouter(SuccessBooking)