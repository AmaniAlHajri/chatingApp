var express = require('express');
var router = express.Router();
const User = require("../models/userTable")
const Op = require('sequelize').Op

/* GET users listing. */
router.get('/', async function(req, res, next) {

    const Users = await User.findAll({
        where: {
            id: {
                [Op.not]: [req.query.senderID] // get all the user expect the sender user
            }
        },
        order: ['id'],
        attributes: {exclude: ['createdAt', 'updatedAt']}
    });
    res.send(JSON.stringify(Users));

});

module.exports = router;
