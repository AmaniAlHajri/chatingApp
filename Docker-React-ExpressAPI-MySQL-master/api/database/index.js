const Sequelize = require("sequelize")

// const connection = new Sequelize('chattingapp', 'root', 'am11223344', {
//     host: 'localhost',
//     port: 3309,
//     dialect: 'mysql'
// })

// db docker connection
const connection = new Sequelize('chattingApp', 'chat', 'chatApp121212', {
    host: 'db',
    port: 3306,
    dialect: 'mysql'
})

connection
    .sync({
        logging: console.log,
    })
    .then(()=> {
        console.log('Connection to DB establish successfully.');
    })
    .catch(err =>{
        console.log('unable to connect to db!')
    });


module.exports =  connection
