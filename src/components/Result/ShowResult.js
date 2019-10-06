import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from '../common/Spinner'


class ShowResult extends Component {
    // state = {
    //     result: this.props.submit.newData
    // }

    componentDidMount() {
        // if (this.state.result !== this.props.submit.newData) {
        //     this.setState({
        //         result: this.props.submit.newData
        //     })
        // }

        if (this.props.submit.saveData === '' || this.props.submit.saveData === null) {
            this.props.history.push('/')
        }
    }

    onClick = (e) => {
        e.preventDefault()
    }

    render() {
        //console.log(this.state.result);
        console.log(this.props.submit)
        if (this.props.submit.newData === null) {
            return (
                <div className="container">
                    <Spinner />
                </div>
            );
        }

        const wholeArray = Object.keys(this.props.submit.newData).map(key => this.props.submit.newData[key]);
        console.log("array", wholeArray)
        var showData = null
        // for (var pack of this.props.submit.newData) {
        //     console.log(pack)
        //     if (pack == 4 || pack == 3 || pack == 2 || pack == 1) continue;

        //     showData += (
        //         <div class="card">
        //             <div class="card-header">
        //                 {pack.Type}
        //             </div>
        //             <div class="card-body">
        //                 <blockquote class="blockquote mb-0">
        //                     {this.props.submit.newData.case == 1 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.D}</span></p>) :
        //                         this.props.submit.newData.case == 2 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.B}</span> To: <span>{pack.C}</span> To: <span>{pack.D}</span></p>) :
        //                             this.props.submit.newData.case == 3 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.B}</span> To: <span>{pack.D}</span></p>) :
        //                                 this.props.submit.newData.case == 4 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.C}</span> To: <span>{pack.D}</span></p>) :
        //                                     null}
        //                     {/* <p>From :<span>{pack.A}</span> to: <span>{pack.B}</span> to: <span>{pack.C}</span> <span>{pack.D}</span></p> */}
        //                     <footer class="blockquote-footer">
        //                         <ul>
        //                             <li>{pack['Bus Details']}</li>
        //                             <li>{pack['Bus Price']}</li>
        //                             <li>{pack['Total Price']}</li>
        //                             <li>{pack['Local B']}</li>
        //                         </ul>
        //                     </footer>
        //                 </blockquote>
        //             </div>
        //         </div>
        //     )
        // }

        const details = ["Departure Time", "Duration", "Arrival Time", "Company", "Price"];

        showData = (<div>
            {wholeArray.map((pack, index) => {
                if (pack === 4 || pack == 3 || pack === 2 || pack == 1) {
                    return null
                } else {
                    return (
                        <div class="card" key="index">
                            <div class="card-header row">
                                <div className="col-8">
                                    {this.props.submit.newData.case == 1 ? (<p>From :<span>{pack.A} </span> To: <span>{pack.D}</span></p>) :
                                        this.props.submit.newData.case == 2 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.B}</span> To: <span>{pack.C}</span> To: <span>{pack.D}</span></p>) :
                                            this.props.submit.newData.case == 3 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.B}</span> To: <span>{pack.D}</span></p>) :
                                                this.props.submit.newData.case == 4 ? (<p>From :<span>{pack.A}</span> To: <span>{pack.C}</span> To: <span>{pack.D}</span></p>) :
                                                    null}
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary " onClick={e => this.onClick()}> Total Price : <i class="fa fa-inr"></i>{Math.round(pack['Total Price'])} Book Now</button>

                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">

                                        {/* <p>From :<span>{pack.A}</span> to: <span>{pack.B}</span> to: <span>{pack.C}</span> <span>{pack.D}</span></p> */}
                                        <footer class="blockquote-footer">
                                            <ul>
                                                <li>Flight Details: </li>
                                                {pack['Flight Details'].map((each, index) => (
                                                    <li key={index}> {details[index]} : {each}</li>
                                                ))}

                                                {/* <li>Departure Time: {pack['Flight Details'][0]}</li>
                                                <li>Duration: {pack['Flight Details'][1]}</li>
                                                <li>Arrival Time: {pack['Flight Details'][2]}</li>
                                                <li>Airlines: {pack['Flight Details'][3]}</li>
                                                <li>Price: {pack['Flight Details'][4]}</li>
                                            </li> */}

                                                {/* <li>{pack['Total Price']}</li> */}

                                            </ul>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                    )
                }
            }
            )}
        </div>)


        return (
            <div className="container">
                <h1>
                    Result here
                </h1>
                {showData}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
})

export default connect(mapStateToProps, {})(withRouter(ShowResult))