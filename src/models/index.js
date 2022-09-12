const db = require('../database/index');

const patients = require('./patients');
const psycho = require('./psycho');
const services = require('./services');

services.belongsToMany = (patients, {
    foreignKey: "patient_id"
});

services.belongsToMany = (psycho, {
    foreignKey: 'psycho_id'
});

module.exports = { patients,
    psycho,
    services
};