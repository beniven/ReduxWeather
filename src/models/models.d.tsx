declare module models {
    interface IAction {
        type?: string;
        payload?: any;
    }

    interface ISearchBarProps {
        fetchWeather?: (city: string) => any;
    }

    interface ISearchBarState {
        term?: string;
    }

    interface IChartProps {
        data?: Array<any>;
        color?: string;
        units?: string;
    }
}