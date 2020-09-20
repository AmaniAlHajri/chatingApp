const Sequelize = require('sequelize');
const connection = require('../database')

const UserTable = connection.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: Sequelize.STRING,
    photo: Sequelize.STRING, // it should be BLOB but for now I assumed its string so I can put photo link
    createdAt: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    // timestamps: false
});

// insert initial data for testing:
UserTable.create({first_name: 'AhMyth' , last_name: 'Alhajri' ,
    username: 'Ahmed95',  password:  'asas', photo: 'https://avatars3.githubusercontent.com/u/25254617?s=400&v=4\t2020-09-19 19:28:23\t2020-09-19 19:28:23'});
UserTable.create({first_name: 'Hamood' , last_name: 'H.' ,
    username: 'hmodd',  password: '121212', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIorQHpHZi15oO4Uax3-vNq-cvZv3CXhmq6w&usqp=CAU\t2020-09-19 19:34:41\t2020-09-19 19:34:41'});
UserTable.create({first_name: 'Amani' , last_name: 'Alhajri' ,
    username: 'Amani95',  password:  'am11', photo: 'https://img.huffingtonpost.com/asset/5915b4721600001922c5ae28.png?ops=scalefit_630_noupscale'});

module.exports = UserTable;
