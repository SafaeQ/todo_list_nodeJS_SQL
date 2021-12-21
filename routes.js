let db = require('./dbconnection')
let data = require('./assets/scripts/data');

router.route('/projects').get((req, res) => {
    db.getOrders().then((data) => {
        response.json(data[0]);
    })
})