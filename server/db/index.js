'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.
const db = require('./db')
const Baby = require('./Baby');
const Diaper = require('./Diaper');
const Feeding= require('./FeedingTable');
const Height = require('./heightTable');
const Parent = require('./Parent');
const Sleep = require('./SleepTable')
const Weight = require('./WeightTable')

// Form the associations

Parent.belongsToMany(Baby, { through: 'familyTable'})
Baby.belongsToMany(Parent, {through: 'familyTable'});

Diaper.belongsTo(Baby)

Baby.hasMany(Feeding)


Baby.hasMany(Height)


Baby.hasMany(Sleep)


Baby.hasMany(Weight)


// const db = require('./db');
// const chalk = require('chalk');
//
// // Require our models. Running each module registers the model into sequelize
// // so any other part of the application can simply call sequelize.model('User')
// // to get access to the User model.
// require('./models');
//
// // Syncing all the models at once. This promise is used by main.js.
// var syncedDbPromise = db.sync();
//
// syncedDbPromise.then(function () {
//   console.log(chalk.green('Sequelize models synced to PostgreSQL'));
// });
//





module.exports = {
  Baby: Baby,
  Diaper: Diaper,
  Feeding: Feeding,
  Height: Height,
  Parent: Parent,
  Sleep: Sleep,
  Weight: Weight,
  db: db

};
