import React, { Component } from 'react'
import Input from '../common/Input'

class TravelForm extends Component {
    state = {
        name: '',
        start: '',
        end: '',
        date: '',
        emailId: '',
        passengers: ''
    }

    onChangeValue = (e) => {
        e.preventDefault()

        //console.log(nam, val)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            ...this.state
        }

        console.log(data);
    }

    fillDefault = (e) => {
        e.preventDefault()
        this.setState({
            name: 'Maher Bhavsar',
            start: 'Gandhinagar',
            end: 'Banglore',
            date: '2019-10-06',
            emailId: 'maher.daiict@gmail.com',
            passengers: '1'
        })
    }

    render() {
        return (
            <div className="TravelForm container">
                <button className="btn btn-primary" onClick={e => this.fillDefault(e)}>
                    Fill Default
                </button>
                <form >
                    {/* <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={e => this.onChangeValue(e)} /> */}
                    <Input
                        label="Start Point"
                        type="text"
                        name="start"
                        value={this.state.start}
                        onChange={e => this.onChangeValue(e)} />
                    <Input
                        label="End Point"
                        type="text"
                        name="end"
                        value={this.state.end}
                        onChange={e => this.onChangeValue(e)} />
                    <Input
                        label="Date of Journey"
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={e => this.onChangeValue(e)} />
                    {/* <Input
                        label="Email Id"
                        type="text"
                        name="eamilId"
                        value={this.state.emailId}
                        onChange={e => this.onChangeValue(e)} /> */}
                    <Input
                        label="Number of Passengers"
                        type="text"
                        name="passengers"
                        value={this.state.passengers}
                        onChange={e => this.onChangeValue(e)} />
                    <button
                        className="btn btn-primary"
                        onClick={e => this.onSubmit(e)}> Submit </button>
                </form>

            </div>
        )
    }

}

export default TravelForm;