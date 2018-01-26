import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { fetchWeather } from '../actions/index';
import { disconnect } from 'cluster';

class SearchBar extends React.Component<models.ISearchBarProps, models.ISearchBarState> {
    constructor(props: any) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Fetch weather
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return Redux.bindActionCreators({ fetchWeather }, dispatch);
}

export default ReactRedux.connect(null, mapDispatchToProps)(SearchBar);