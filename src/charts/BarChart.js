import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import DashboardCard from "../components/DashboardCard";

const BarGraphic = () => {

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {

        const getData = async () => {

            const url = "data/barChart.json";

            try {

                const response = await fetch(url);
                const data = await response.json();

                setCategories(data.items.map((item) => item.country));
                setValues(data.items.map((item) => item.temperature));

            } catch (error) {

                console.log(error);

            }
        }

        getData();

    }, []);

    const colors = {
        backgColor: '#FFF',
        fontColor: '#000',
        titleColor: '#5D405C'
    }

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