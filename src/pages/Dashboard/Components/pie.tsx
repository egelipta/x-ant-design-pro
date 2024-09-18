import React from 'react';
import { Pie } from '@ant-design/charts';
import { dataPie } from '../Datas/pie'


const PieChart: React.FC = () => {

    const config = {
        data: dataPie,
        height: 300,
        angleField: 'value',
        colorField: 'type',
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                position: 'right',
                rowPadding: 25,
                layout: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                },
            },
        },
    };

    return (
        <Pie {...config} />
    );
};

export default PieChart;
