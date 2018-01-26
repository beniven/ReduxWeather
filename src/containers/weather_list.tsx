import * as React from 'react';
import * as ReactRedux from 'react-redux';
const ReactSparkLines = require('react-sparklines');
const Sparklines = ReactSparkLines.Sparklines;
const SparklinesLine = ReactSparkLines.SparklinesLine;

class WeatherList extends React.Component<any, any> {
    renderWeather(cityData: any) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weather: any) => weather.main.temp);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
