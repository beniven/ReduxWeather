import * as _ from 'lodash';
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component<any, any> {
    renderWeather(cityData: any) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map((weather: any) => weather.main.temp), (temp: number) => temp - 255.372);
        const pressures = cityData.list.map((weather: any) => weather.main.pressure);
        const humidities = cityData.list.map((weather: any) => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="ºF" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (ºF)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }: any) {
    return { weather };
}

export default ReactRedux.connect(mapStateToProps)(WeatherList);
