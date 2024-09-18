import React, { useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { dataPieHalf } from '../Datas/pie-half'

const PieHalf: React.FC = () => {
    const totalValue = dataPieHalf.reduce((acc, item) => acc + item.value, 0);

    const config = {
        data: dataPieHalf,
        height: 350,
        angleField: 'value',
        colorField: 'type',
        // radius: 0.8,
        innerRadius: 0.8,
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 20,
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: 'Total Active Tickets',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 15,
                    fontStyle: 'bold',
                },
            },
            {
                type: 'text',
                style: {
                    text: `${totalValue}`,
                    x: '50%',
                    y: '56%',
                    textAlign: 'center',
                    fontSize: 20,
                    fontStyle: 'bold',
                },
            },
        ],
    };
    // console.log(config)

    return (
        <Pie {...config} />
    )
};

export default PieHalf;