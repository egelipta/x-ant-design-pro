import { BellOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Badge, Avatar, Button } from 'antd';
import React from 'react';


const Notification: React.FC = () => {

    return (
        <PageContainer>
            <Badge size="small" count={5}>
                <BellOutlined style={{ fontSize: 25 }} />
            </Badge>
        </PageContainer>
    );
};

export default Notification;


// import React, { useState, useEffect } from 'react';
// import { Drawer } from 'antd';

// const Notification: React.FC = () => {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         setVisible(true);
//     }, []);

//     const onClose = () => {
//         setVisible(false);
//     };

//     return (
//         <Drawer
//             title="Notifications"
//             placement="right"
//             onClose={onClose}
//             open={visible}
//         >
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//         </Drawer>
//     );
// };

// export default Notification;
