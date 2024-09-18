import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import mockjs from 'mockjs';


const generateRandomCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';
    for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 5; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return code;
};

const itSubjects = [
    'Server down',
    'Network latency',
    'Software update issue',
    'Data breach',
    'User access problem',
    'Email delivery failure',
    'Database connection error',
    'Firewall configuration issue',
    'Disk space full',
    'System performance degradation',
];


// Function to generate 100 items with sequential IDs and random names
const generateData = () => {
    const dataMock = [];
    for (let i = 1; i <= 100; i++) {
        dataMock.push({
            id: i,
            name: mockjs.Random.name(),
            type: Math.floor(Math.random() * 3) + 1,
            code: generateRandomCode(),
            priority: Math.floor(Math.random() * 3) + 1,
            date: mockjs.Random.date('yyyy-MM-dd'),
            subject: itSubjects[Math.floor(Math.random() * itSubjects.length)], // Selects a random IT subject
            image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`
        });
    }
    return dataMock;
};

const Inbox: React.FC = () => {
    const datas = generateData();

    return (
        <PageContainer>
            <pre>{JSON.stringify({ datas }, null, 2)}</pre>
        </PageContainer>
    );
};

export default Inbox;
