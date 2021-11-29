import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './Map.css'

class Map extends Component {
    componentDidMount() {
        const app = this.props.app

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcGVzc3NzIiwiYSI6ImNrd2NpbDQxcDI5aHkzMm8wa3BrcmQwbXYifQ.z_XdxM3Gio2265jVupNdKw';

        const map = new mapboxgl.Map({
            container: 'map',
            style: app.state.style,
            center: [
                app.state.longitude,
                app.state.latitude
            ],
            zoom: 12
        });

        const navigationControl = new mapboxgl.NavigationControl();

        map.addControl(navigationControl);

        this.props.app.setState({
            map: map
        })

    }

    render () {
        const app = this.props.app
        const map = app.state.map

        if (map) {
            map.setStyle(app.state.style)
        }


        return (
        <div id="map">
        </div>
        );
    }
  }
  
  export default Map;