import Chart from 'react-apexcharts';

import DashboardCard from "../components/DashboardCard";

const BarGraphic = () => {

    const colors = {
        backgColor: '#FFF',
        fontColor: '#000',
        barsColor: '#8ED471',
        titleColor: '#5D405C'
    }

    const series = [
        {
            name: "Temperatura em Fahrenheit",
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'],
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
        colors: [colors.barsColor],
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