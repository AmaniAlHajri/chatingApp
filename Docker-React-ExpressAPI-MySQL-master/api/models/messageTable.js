const Sequelize = require('sequelize');
const connection = require('../database')
const User = require("./userTable")

const MessageTable = connection.define('Message', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    message: Sequelize.STRING,
    sender_id: Sequelize.INTEGER,
    receiver_id: Sequelize.INTEGER,
    date: Sequelize.DATE,
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

MessageTable.belongsTo(User, {
    as: 'Message_FK1',
    foreignKey: 'sender_id'
});

MessageTable.belongsTo(User, {
    as: 'Message_FK2',
    foreignKey: 'receiver_id'
});

module.exports = MessageTable;
