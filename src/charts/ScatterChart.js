import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';

import DashboardCard from "../components/DashboardCard";

const ScatterGraphic = () => {

    const [names, setNames] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {

        const getData = async () => {

            const url = "data/scatterChart.json";

            try {

                const response = await fetch(url);
                const data = await response.json();

                setNames(data.items.map((item) => item.sample));
                setValues(data.items.map((item) => item.results));

            } catch (error) {

                console.log(error);

            }
        };

        getData();

    }, []);

    const colors = {
        backgColor: '#FFF',
        fontColor: '#000',
        titleColor: '#5D405C'
    }

    const series = [];

    const dataSeries = () => {

        for (let i = 0; i < names.length; i++) {

            const obj = {
                name: names[i],
                data: values[i]
            }

            series.push(obj);

        }

        return series;

    }

    dataSeries();

    const options = {

        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            },
            background: colors.backgColor,
            fontFamily: 'Montserrat',
            foreColor: colors.fontColor
        },

        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },

        yaxis: {
            tickAmount: 7
        },

        subtitle: {
            text: 'Scatter',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 15,
            floating: false,
            style: {
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                color: colors.titleColor
            },
        }
    };

    return (

        <DashboardCard>

            <Chart
                options={options}
                type="scatter"
                series={series}
                width="100%"
                height="100%"
            />

        </DashboardCard>

    );

}

export default ScatterGraphic;