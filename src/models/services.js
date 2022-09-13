const db = require('../database/index');

const { DataTypes } = require('sequelize');

const psycho = require('./psycho');
const patients = require('./patients');

const services = db.define('services', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: patients,
            key: 'id',
        }
    },
    psycho_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: psycho,
            key: 'id',
        }
    },
    service_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: 'services', timestamps: false, underscored: true
});

module.exports = services;