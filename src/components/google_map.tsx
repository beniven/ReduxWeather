import * as React from 'react';
declare const google: any;

class GoogleMap extends React.Component<models.IGoogleMapProps, any> {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            disableDefaultUI: true
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;