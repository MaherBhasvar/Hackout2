import React, { Component } from 'react'
import Input from '../common/Input'
import Radio from '../common/Radio'
//import PrimaryMode from './PrimaryMode'
import { Modal, Button } from 'react-bootstrap'
import { submitData, saveData, getLocation, sendLocations } from '../../actions/submitActions'
import { connect, } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CurrentLocation from '../GoogleMap/CurrentLocation'


class TravelForm extends Component {
    state = {
        name: '',
        start: '',
        end: '',
        date: '',
        emailId: '',
        passengers: '',
        primaryMode: '',
        showPrimaryMode: false,

    }
    handleClose = (e) => {
        //e.preventDefautl()
        this.setState({
            showPrimaryMode: false
        })
    }

    handleSave = (e) => {
        // console.log(this.state);
        const data = { "entry": "Bangalore", "dest": "Gandhinagar", "date": "20191007", "seats": "2", "latEn": "12.9716", "lonEn": "77.5946", "latDes": "23.2156", "lonDes": "72.6369" }
        console.log(data)
        this.props.submitData(data, this.props.history)
        this.props.saveData(data)

        this.props.history.push('/result')
        this.setState({
            showPrimaryMode: false
        })
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
            city: this.state.start,

        }

        const data2 = {
            entry: this.state.start,
            dest: this.state.end
        }

        this.setState({
            showPrimaryMode: true
        })

        // this.props.getLocation(data)

        this.props.sendLocations(data2)

        console.log(data);
    }

    fillDefault = (e) => {
        e.preventDefault()
        this.setState({
            name: 'Maher Bhavsar',
            start: 'Gandhinagar',
            end: 'Bengaluru',
            date: '2019-10-06',
            emailId: 'maher.daiict@gmail.com',
            passengers: '1'
        })
    }

    // showPosition = (position) => {
    //     var lat = position.coords.latitude;
    //     var lng = position.coords.longitude;
    //     console.log(lat, lng)
    //     //map.setCenter(new google.maps.LatLng(lat, lng));
    //     this.setState({
    //         lat: lat,
    //         lng: lng
    //     })
    // }
    // getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
    //     } else {
    //         alert("Geolocation is not supported by this browser.");
    //     }
    // }





    render() {
        return (

            <div className="TravelForm container">
                {this.getLocation}
                <Modal show={this.state.showPrimaryMode} onHide={e => this.handleClose(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Preferable Mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Radio
                            label="Primary Mode"
                            type="radio"
                            name="primaryMode"
                            value="Bus"
                            radioMessage="Bus"
                            onChange={e => this.onChangeValue(e)}
                        />
                        <Radio
                            label=""
                            type="radio"
                            name="primaryMode"
                            value="Flight"
                            radioMessage="Flight"
                            onChange={e => this.onChangeValue(e)}
                        />
                        <Radio
                            label=""
                            type="radio"
                            name="primaryMode"
                            value="Both"
                            radioMessage="Both"
                            onChange={e => this.onChangeValue(e)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={e => this.handleClose(e)}>
                            Close
                        </Button>
                        <Button variant="secondary" onClick={e => this.handleSave(e)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className="btn btn-primary" onClick={e => this.fillDefault(e)}>
                    Fill Default
                </button>
                <div class="row">
                    <div class="col-4">
                        1 of 3
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
                                type="tex"
                                name="eamilId"
                                value={this.state.emailId}
                                onChange={e => this.onChangeValue(e)} /> */}
                            <Input
                                label="Number of Passengers"
                                type="number"
                                name="passengers"
                                value={this.state.passengers}
                                onChange={e => this.onChangeValue(e)} />
                            <button
                                className="btn btn-primary"
                                onClick={e => this.onSubmit(e)}> Submit </button>
                        </form>
                    </div>
                    <div class="col-6">
                        2 of 3 (wider)
                        <CurrentLocation startLng={this.props.submit.startLng} startLat={this.props.submit.startLat} />
                    </div>

                </div>



            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
});

export default connect(mapStateToProps, { submitData, saveData, getLocation, sendLocations })(withRouter(TravelForm));