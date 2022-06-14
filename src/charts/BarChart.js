import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { useFetch } from '../hook/useFetch';
import DashboardCard from "../components/DashboardCard";

const BarGraphic = () => {

    const colors = {
        backgColor: '#FFF',
        fontColor: '#000',
        titleColor: '#5D405C'
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState([]);

    const url = "data/barChart.json";

    const { data } = useFetch(url);

    useEffect(() => {

        setCategories(data && data.map((item) => item.country));
        setValues(data && data.map((item) => item.temperature));

    }, [data]);

    const series = [

        {
            name: "Temperatura em Fahrenheit",
            data: values && values
        }

    ];

    const options = {

        chart: {
            type: "bar",
            background: colors.backgColor,
            fontFamily: 'Montserrat',
            foreColor: colors.fontColor
        },

        xaxis: {
            categories: categories && categories
        },

        plotOptions: {
            bar: {
                borderRadius: 3,
                horizontal: true,
            },
            dataLabels: {
                enabled: false,
            }
        },

        subtitle: {
            text: 'Barras',
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
                type="bar"
                series={series}
                width="100%"
                height="100%"
            />

        </DashboardCard>

    );

}

export default BarGraphic;