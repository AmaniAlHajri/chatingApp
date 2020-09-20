var express = require('express');
var router = express.Router();
const Op = require('sequelize').Op
const bodyParser = require("body-parser");
const Message = require("../models/messageTable")
const app = express();
const Sequelize = require('sequelize');

/* GET all messages. */
router.get('/', async function(req, res, next) {
    const message = await Message.findAll({
        where: {
            sender_id: {
                [Op.or]: [req.query.senderID, req.query.receiverID]
            },
            receiver_id: {
                [Op.or]: [req.query.senderID, req.query.receiverID]
            }
        },
        order: ['date'], // order by date
        attributes: {exclude: ['createdAt', 'updatedAt']}
    });
    res.send(JSON.stringify(message));
});

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* POST (adding new message). */
router.post('/', async function(req, res) {
    await Message.create({message: req.body.message , sender_id: req.body.senderID ,
        receiver_id: req.body.receiverID,  date: Sequelize.literal('CURRENT_TIMESTAMP')});
});

module.exports = router;
