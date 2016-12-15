var Sequelize = require('sequelize')


var db = new Sequelize('postgres://localhost:5432/datababes', {
    logging: function(QUERY) {
        console.log('QUERY>>>>', QUERY, '\n')
    }
});



module.exports = db
