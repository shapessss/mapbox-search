import React, { Component } from 'react'
import mapboxgl from '!mapbox-gl'

class PlaceItem extends Component {

    goTo() {
        const app = this.props.app
        const map = app.state.map
        const place = this.props.place

        map.flyTo({
            center: [place.longitude, place.latitude],
            zoom: 10
        })
    }

    render () {
        const app = this.props.app
        const map = app.state.map

        const place = this.props.place

        if (map) {
            const popup = new mapboxgl.Popup({
                closeButton: false
            })

            popup.setHTML(place.name)

            const marker = new mapboxgl.Marker({
                color: "#2727e6"
            })

            marker.setLngLat([place.longitude, place.latitude])
            marker.setPopup(popup)

            marker.addTo(map)
        }


        return (
            <div className="place-item" onClick={() => this.goTo()}>
                {place.name} ({place.latitude}, {place.longitude})
            </div>
        )
    }
}

export default PlaceItem