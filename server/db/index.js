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


Baby.hasMany(Feeding,{onDelete: 'cascade'})


Baby.hasMany(Height,{onDelete: 'cascade'})


Baby.hasMany(Sleep,{onDelete: 'cascade'})


Baby.hasMany(Weight,{onDelete: 'cascade'})

Baby.hasMany(Diaper,{onDelete: 'cascade'})

// Object.keys(db).forEach(function(modelName) {
//   console.log("MMMMMODEL NAME", db)
// });



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
