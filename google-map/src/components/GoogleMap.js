import React, {useState} from 'react';

import{
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow,
} from 'react-google-maps';

import mapStyles from '../data/mapStyles';
import mapStyles108burgers from '../data/mapStyles108';




function Map() {

    const [latLng, setLatLng] = useState([]);

    // creating a function handle onClick event
    function onClickHandle(e) {
        setLatLng([
            ...latLng,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        ])
    } 

    return (
    <div>
        <GoogleMap
        
        // required default params
        defaultZoom={10}
        defaultCenter={{ lat: 34.147785, lng: -118.144516}}

        // Map styles: 
        defaultOptions={{styles: mapStyles}}
        // defaultOptions={{styles: mapStyles108burgers}}


        // onClick func
        onClick={ onClickHandle
            // event => {
            // console.log(event.latLng.lat())
            // console.log(event.latLng.lng())
            // }
        }
        >

        {console.log(latLng)}
        {latLng.map( (latlng, i) =>(
            // <Marker key={i} position={{ lat: latlng.lat, lng: latlng.lng}}/>
            <Marker key={i} position={{ lat: latlng.lat, lng: latlng.lng}}>
                <InfoWindow>
                    <div style={{'color': 'goldenrod'}}>lat:{latlng.lat} lng:{latlng.lng}</div>
                </InfoWindow>
            </Marker>
        ))}
        
        {/* <Marker position={{ lat: 34.147785, lng: -118.144516 }}/> */}
        {/* <Marker position={{ lat: 34.180840, lng: -118.308968 }}/> */}
        </GoogleMap>
    </div>
    );
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMapApp() {
    return (
    <div style={{ width: '100vw', height: '95vh'}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        /> 
    </div>
    );
}














