import * as _ from 'lodash';
import * as React from 'react';
const ReactSparkLines = require('react-sparklines');

function average(data: any) {
    return _.round(_.sum(data)/data.length);
}

export default (props: models.IChartProps) => {
    return (
        <div>
            <ReactSparkLines.Sparklines height={120} width={180} data={props.data}>
                <ReactSparkLines.SparklinesLine color={props.color} />
                <ReactSparkLines.SparklinesReferenceLine type="avg" />
            </ReactSparkLines.Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}