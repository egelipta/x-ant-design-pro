import React from 'react';
import { Column } from '@ant-design/charts';
import { dataColumn } from '../Datas/column';


const Dashboard: React.FC = () => {

    const config = {
        data: dataColumn,
        height: 300,
        xField: 'letter',
        yField: 'frequency',
        label: {
            text: (d: any) => `${(d.frequency * 100).toFixed(1)}%`,
            textBaseline: 'bottom',
        },
        axis: {
            y: {
                labelFormatter: '.0%',
            },
        },
        style: {
            // 圆角样式
            radiusTopLeft: 10,
            radiusTopRight: 10,
        },
    };

    return (
        <Column {...config} />
    );
};

export default Dashboard;
