import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Sabbir',
            email:'sabbir@gmail.com',
            phone: '+8801711081019',
            status: 'active',
            joinMode: 'direct',
            subscriptionType: 'free',
            password: bcrypt.hashSync ('123456'),
            isAdmin: true,
        },
        {
            name:'Sabbir',
            email:'sabbir@gmail.com',
            phone: '+8801711081019',
            status: 'active',
            joinMode: 'refferal',
            subscriptionType: 'gold',
            password: bcrypt.hashSync ('123456'),
            isAdmin: true,
        },
    ],
    
    
};

export default data;