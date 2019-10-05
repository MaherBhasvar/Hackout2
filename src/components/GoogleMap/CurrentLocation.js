// import React, { Component } from 'react'
// import { Map, GoogleApiWrapper, InfoWindow, Geocoder } from 'google-maps-react';

// var map, infoWindow
// class CurrentLocation extends Component {

//     state = {
//         // map: '',
//         // infoWindow: '',
//         lat: '',
//         lng: '',
//     }
//     showPosition = (position) => {
//         var lat = position.coords.latitude;
//         var lng = position.coords.longitude;
//         console.log(lat, lng)
//         //map.setCenter(new google.maps.LatLng(lat, lng));
//         this.setState({
//             lat: lat,
//             lng: lng
//         })
//     }
//     getLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.showPosition);
//         } else {
//             alert("Geolocation is not supported by this browser.");
//         }
//     }



//     render() {
//         const mapStyles = {
//             width: '100%',
//             height: '100%',
//         };
//         return (
//             <div className="GoogleMaps">
//                 {/* <Map
//                     google={this.props.google}
//                     zoom={8}
//                     style={mapStyles}
//                     initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
//                 /> */}
//             </div>
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCfVJ5BempzSWsifnLXpNHwTAqh3lXL-oA'
// })(CurrentLocation);

//export default CurrentLocation;